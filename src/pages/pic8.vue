<template>
  <div id="tab">
    <table class="top">
      <thead>
        <tr>
          <th style="width: 50%">航线 航班号</th>
          <th>航空公司</th>
          <th>平均客座率</th>
        </tr>
      </thead>
    </table>
    <div class="scroll-boxone">
      <table class="tab-scrollone">
        <tbody>
          <tr
            v-for="(item, index) in record"
            :key="index"
            :class="line == index ? 'contactsbg' : ''"
            @click="listen(item.flight, index)"
          >
            <td style="width:50%">{{ item.flight }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.average }}</td>
            <!-- <td class="rit">{{ item.max }}</td> -->
          </tr>
        </tbody>
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
      // company: "",
      line: -1,
    };
  },
  computed: {
    ...mapState("component7", ["com7","linex"]),
  },
  created() {},
  methods: {
    listen(val1, index) {
      this.flight = val1;
      // this.company = val2;
      this.line = index;
      this.$store.commit("component7/setlinex",index);
    },
    // changOne() {
    //   var scrollTabOne = document.getElementsByClassName("tab-scrollone")[0]; //滚动的表格
    //   var tbody = scrollTabOne.getElementsByTagName("tbody")[0]; //tbody

    //   var speedone = scrollTabOne.getElementsByTagName("td")[0].offsetHeight + 1.2; //行高(滚动速度)	 加上表格边框
    //   var countone = 0; //要追加到表格底部的行索引
    //   setInterval(scrollTopOne, 2000); //每隔1.5秒滚动一次

    //   //实现表格向上滚动
    //   function scrollTopOne() {
    //     var t = scrollTabOne.offsetTop; //top值
    //     scrollTabOne.style.top = t - speedone + "px"; //滚动
    //     var trs = tbody.getElementsByTagName("tr"); //每次都重新取出所有内容行
    //     var newTr = trs[countone].cloneNode(true); //复制行，得到新的行对象
    //     //将滚动的行追加到表格底部
    //     tbody.appendChild(newTr);
    //     countone++;
    //   }
    // },
  },
  watch: {
    "$store.state.component7.com7"() {
      // this.chang();
      this.record = this.com7;
      // console.log(this.record);
    },
    "$store.state.component7.linex"(){
        this.line=this.linex
    },
    flight(newVal) {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      var str = this.flight;
      // console.log(str);

      formData.append("airline_flt_number", str);

      this.$indicator.open({ text: "加载中..." });
      // this.$http.get("http://127.0.0.1:8080/pic8.json")
      this.$http.post("http://192.168.193.209:8000/index/", formData, config)
        .then((res) => {
          this.$indicator.close();
          var store = res.data;
          var dataOne = store[0];
          var dataTwo = store[1];
          // var dataThree = store[2];
          // var dataFore = store[3];

          ///////////////////////////////////////////////////////////////
          var dataOne_a = [];
          var dataOne_b = [];
          var dataOne_c = [];
          var dataOne_d = [];
          // console.log(store);
          for (let index = 0; index < dataOne.length; index++) {
            dataOne_a.push(dataOne[index][0]);
            dataOne_b.push(dataOne[index][1]);
            dataOne_c.push(dataOne[index][2]);
            dataOne_d.push(dataOne[index][3]);
          }
          // console.log(dataOne_c);
          var dataOne_b_filter = [];
          // console.log(dataOne_c);
          for (let index = 0; index < dataOne_b.length; index++) {
            var str = dataOne_b[index].replace("%", "");
            var str = parseFloat(str);
            dataOne_b_filter.push(str);
          }
          // console.log(store);

          /////////////////////////////////////////////////////////////////////////////////////////////////////////

          var dataTwo_a = [];
          var dataTwo_b = [];
          var dataTwo_c = [];
          // var dataTwo_c = [];
          // console.log(store);
          for (let index = 0; index < dataTwo.length; index++) {
            dataTwo_a.push(dataTwo[index][0]);
            dataTwo_b.push(dataTwo[index][1]);
            dataTwo_c.push(dataTwo[index][2]);
            // dataTwo_c.push(dataThree[index][1]);
          }

          // console.log(dataOne_c);
          // var dataTwo_c_filter = [];
          // for (let index = 0; index < dataTwo_c.length; index++) {
          //   var str = dataTwo_c[index].replace("%", "");
          //   var str = parseFloat(str);
          //   dataTwo_c_filter.push(str);
          // }
          // console.log(dataTwo_c_filter);
          //////////////////////////////////////////////////////////////////
           
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          this.$store.commit("component8/setdataOne_a", dataOne_a);
          // this.$store.commit("component8/setdataOne_b", dataOne_b);
          this.$store.commit("component8/setdataOne_b", dataOne_b_filter);
          this.$store.commit("component8/setdataOne_c", dataOne_c);
          this.$store.commit("component8/setdataOne_d", dataOne_d);
          //////////////////////////////////
          this.$store.commit("component8/setdataTwo_a", dataTwo_a);
          this.$store.commit("component8/setdataTwo_b", dataTwo_b);
          this.$store.commit("component8/setdataTwo_c", dataTwo_c);
          // this.$store.commit("component8/setdataTwo_c", dataTwo_c_filter);
          //////////////////////////////////
          this.$store.commit("component8/setlinex",5);
          this.$store.commit("component8/setlinexx",5);
          // this.$store.commit("component8/setdataFore", dataFore);
          this.$store.commit("component8/setnameOne",newVal);
          // this.$store.commit("component8/setnameTwo",newVal);
        });
    },
    // record(){
    //   this.$nextTick(()=>{
    //      this.changOne()
    //   })
    // }
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: none;
  border-collapse: collapse;
}
/*.top,.top th{border-bottom: none;}*/
th {
  position: sticky;
  top: 0;
  background-color: rgba(72, 121, 255, 0.37);
  color: rgb(255, 255, 255);
  border: none;
  height: 30px;
}
td {
  line-height: 35px;
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
.scroll-boxone {
  height: 80%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.tab-scrollone {
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s;
  border-top: none;
}
.tab-scrollone td {
  border-top: none;
}
.contactsbg {
  background-color: rgb(142, 177, 255);
}
tbody .rit {
  padding-right: 8px;
  text-align: right;
}
#tab {
  width: 100%;
  height: 100%;
}
</style>
