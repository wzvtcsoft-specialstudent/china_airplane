<template>
  <div id="tab" @dblclick='dblclick()'>
    <table class="top">
      <thead>
        <tr>
          <th style="width:30%">航线</th>
          <th>出发城市</th>
          <th>到达城市</th>
          <th>旅客量</th>
        </tr>
      </thead>
    </table>
    <div class="scroll-box">
      <table class="tab-scroll">
      <vue-seamless-scroll :data="record" :class-option="optionSingleHeightTime" class="seamless-warp" id="dom" :class="{scrollPa:paActive}">
        <tbody>
          <tr v-for="(item, index) in record" :key="index" @click="listen(item.flight,index);click()" :class="line == index ? 'contactsbg' : ''" @mouseover="mouseover()">
            <td style="width:30%">{{ item.flight }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.average }}</td>
            <td class="rit">{{ item.max }}</td>
          </tr>
        </tbody>
      </vue-seamless-scroll>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      record: [],
      flight: "",
      paActive:false,
      line:-1
    };
  },
  // created() {
  //   this.chang();
  // },
  mounted() {
    this.chang()
    
    this.record=this.com5
  },
  computed: {
    ...mapState("component5", ["com5"]),

                optionSingleHeightTime() {
                return {
                    // singleHeight: 26,
                    // waitTime: 2500,

                    step: 0.1, // 数值越大速度滚动越快
                    limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: true, // 开启数据实时监控刷新dom
                    singleHeight:30, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 0 // 单步运动停止的时间(默认值1000ms)

                }
            },
  },
  methods: {
    listen(val,index) {
      this.flight = val;
      this.$store.commit("component7/setlinex",-1);
      // console.log(this.flight);
      this.line = index;
    },
    chang(){      
      var a = document.getElementById("dom").children[0].children[1].remove();  
    },
    click(){
       this.$emit('pic7Click');
    },
    mouseover(){
       this.$emit('pic7Mouseover');
    },
    fresh(){
      this.$emit('pic7Fresh');
    },
    dblclick(){
      this.$emit('pic7Dblclick');
    }  
  },
  watch: {
    "$store.state.component5.com5"() {
      // this.chang();
      this.record = this.com5;
      if(this.record.length>6){
          this.paActive=true
      }else{
          this.paActive=false
      }
      // console.log(this.record);
    },
    flight(newVal) {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      //参数
      formData.append("airline", newVal);

      this.$indicator.open({ text: "加载中..." });
      this.$http
        // .get("http://127.0.0.1:8080/pic7.json")
        this.$http.post("http://192.168.193.209:8000/index/", formData, config)
        .then((res) => {
          this.$indicator.close();
          var store = res.data;
          var list = [];
          for (let index = 0; index < store.length; index++) {
            var obj = {};
            obj.flight = store[index][0];
            obj.company = store[index][1];
            obj.average = store[index][2];
            // obj.max = store[index][3];
            list.push(obj);
          }

          this.$store.commit("component7/setcom7", list);
          
          this.fresh()
        });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: none;
  border-collapse: collapse;
}
th {
  position: sticky;
  top: 0;
  background-color: rgba(72, 121, 255, 0.37);
  color: rgb(255, 255, 255);
  border: none;
  height: 30px;
}
td {
  line-height: 30px;
  border: none;
  text-align: center;
  width: 120px;
  height: 30px;
  color: rgb(217, 241, 255);
  font-size: 14px;
}
tbody tr:hover {
  background-color: rgb(142, 177, 255);
  cursor: pointer;
}
.scroll-box {
  height: 195px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.tab-scroll {
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s;
  border-top: none;
}
.tab-scroll td {
  border-top: none;
}
tbody .rit {
  text-align: right;
  /* margin: 5px; */
  padding-right: 8px;
}
#tab{
  width: 100%;
  height: 100%;
}
.tabShow{
  display: none;
}
.seamless-warp div div:nth-child(1){
  display: none;
}
.seamless-warp {
    height: 196px;
    overflow: hidden;
}
.scrollPa{
    padding-top:30px;
}
.contactsbg {
  background-color: rgb(142, 177, 255);
}
</style>