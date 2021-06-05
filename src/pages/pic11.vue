<template>
  <div id="app"  @dblclick='dblclick()'>
    <span class="hang">航空公司</span>
    <div class="btnall">
      <table class="tab-scroll" cellspacing="5px" cellpadding="10px">
        <tr v-for="(item, index) in data" :key="index" @click="btn(item,index)" :class="line == index ? 'contactsbg' : ''"><td>{{item}}</td></tr>
      </table>
    </div>
    <div class="pan">{{pan}}营运里程</div>
    <div
      id="pic9"
      style="width: 100%; height: 100%; margin-left: 0%"
    ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
   computed: {
    ...mapState("component11", ["month","number"]),
  },
  mounted() {
    this.drawChart();
  },
  data() {
    return {
      data:['AC','AD','AE','AF','BA','BB','BC','BE','CA','CD','CE','CF','CG','DD','DF','EA','EB','ED','EF','EG','FB','FE','FG','GE','GG'],
      // month:[],
      // number:[],
      pan:'',
      line:-1
    }
  },
  created() {
    this.op = this.option;
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic9"));
      const option = {
        backgroundColor: "rgba(200,200,200,0.1)",
        textStyle: {
          color: "#fff",
        },
        grid: {
          left: "20%",
          right: "5%",
          bottom: "15%",
          top: "25%",
        },
        xAxis: {
          type: "category",
          data: this.month,//月份["5", "6", "7"]
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.number,//数值[1200, 2000, 1500,]
            type: "bar",
            color: "#09f",
          },
        ],
      };
      myChart.setOption(option);
    },
    pull() {
      var obj = document.getElementById("sky"); //定位id
      var index = obj.selectedIndex; // 选中索引
      var text = obj.options[index].text; // 选中文本
      var value = obj.options[index].value; // 选中值
      console.log(text);
      console.log(value);
    },
    btn(name,index){ 
        this.line=index
        this.pan=name 
        let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      var str = this.flight + " " + this.company;
      // console.log(str);
      formData.append("company_name_om", name);
      this.$indicator.open({ text: "加载中..." });
      // this.$http.get("http://127.0.0.1:8080/pic11.json") 
      this.$http.post("http://192.168.193.209:8000/index/", formData, config)
      .then((res) => {
          this.$indicator.close();
          var store = res.data;
          var dataOne = [];
          var dataTwo= [];
          for (let index = 0; index < store.length; index++) {
          dataOne.push(store[index][0])
          dataTwo.push(store[index][1])
        }

        this.$store.commit("component11/setmonth", dataOne);
        this.$store.commit("component11/setnumber", dataTwo);
        //  this.month=dataOne
        //  this.number=dataTwo
         this.drawChart()
        });
    },
    dblclick(){
      this.$emit('pic11Dblclick');
    }
  },
};
</script>

<style scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
.btnall {
  z-index: 2;
  float: left;
  width: 150px;
  height: 130px;
  margin-top: 45px;
  overflow: auto;
  position: relative;
}
.btnall::-webkit-scrollbar {
  width: 0;
}
.hang {
  position: absolute;
  top: 10px;
  left: 3%;
  color: azure;
  font-size: 22px;
}
.tab-scroll {
  position: absolute;
  width: 100px;
  left: 17%;
  top: -10;
  transition: all 1s;
  border-top: none;
  cursor: pointer;
  color: aliceblue;
  /* background-color: rgba(197, 206, 255, 0.63); */
}
.tab-scroll td:hover {
  background-color: rgba(183, 189, 255, 0.658);
}
.pan {
  width: 150px;
  float: left;
  margin-top: 0.5%;
  margin-left: 30%;
  color: azure;
  font-size: 150%;
  /* font-size:"1px"; */
}
span {
  font-size: 20px;
}
table.tab-scroll {
  border-spacing: 5px;
}
.tab-scroll td {
  border-radius: 3px;
  background-color: rgba(155, 173, 255, 0.158);
}
</style>