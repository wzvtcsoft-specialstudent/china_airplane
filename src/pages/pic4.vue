<template>
  <!-- <div id="app"> -->
  <div class="zhu">
    <button
      id="1"
      class="btn1"
      @click="btn(5)"
      style="left: 250px"
      :class="line == 5 ? 'contactsbg' : ''"
    >
      5
    </button>
    <button
      id="2"
      class="btn1"
      @click="btn(6)"
      style="left: 310px"
      :class="line == 6 ? 'contactsbg' : ''"
    >
      6
    </button>
    <button
      id="3"
      class="btn1"
      @click="btn(7)"
      style="left: 370px"
      :class="line == 7 ? 'contactsbg' : ''"
    >
      7
    </button>
    <button
      id="4"
      class="btn1"
      @click="btn(8)"
      style="left: 430px"
      :class="line == 8 ? 'contactsbg' : ''"
    >
      8
    </button>
    <button
      id="5"
      class="btn1"
      @click="btn(9)"
      style="left: 490px"
      :class="line == 9 ? 'contactsbg' : ''"
    >
      9
    </button>
    <button
      id="6"
      class="btn1"
      @click="btn(10)"
      style="left: 550px"
      :class="line == 10 ? 'contactsbg' : ''"
    >
      10
    </button>
    <div id="pic12" style="width: 100%; height: 100%"></div>
  </div>
  <!-- </div> -->
</template>

<script>
import echarts from "echarts";
import { mapState, mapGetters } from "vuex";
import "../css/pic46.css";
export default {
  // name: "app",
  data() {
    return {
      line: 5,
      title: [],
    };
  },
  mounted() {
    this.line = this.$store.state.component8.linexx;

    this.title = [];
    this.title.push(this.nameOne + "航班" + this.line + "月每天收入");

    // this.title.push(this.nameOne + "test");

    this.drawChart();
    // this.line=this.$store.state.component8.linexx
  },
  computed: {
    ...mapState("component8", [
      "dataTwo_a",
      "dataTwo_b",
      "dataTwo_c_filter",
      "linexx",
      "nameOne",
    ]),
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic12"));
      const option = {
        backgroundColor: "rgba(100,100,100,0.2)",
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: this.title, //某月航班收入
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: false },
            saveAsImage: { show: false },
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.dataTwo_a, //数据[]
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#26D9FF",
              width: 1,
            },
          },
          axisTick: {
            show: true, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(250,250,250)", //X轴文字颜色
              fontSize: 12,
            },
          },
        },
        yAxis: [
          {
            type: "value",
            nameTextStyle: {
              color: "#ebf8ac",
              fontSize: 6,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#26D9FF",
                width: 1,
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(250,250,250)",
                fontSize: 12,
              },
            },
          },
          // {
          //   type: "value",
          //   /*name: "同比",*/
          //   nameTextStyle: {
          //     color: "#ebf8ac",
          //     fontSize: 8,
          //   },
          //   position: "right",
          //   splitLine: {
          //     show: false,
          //   },
          //   axisTick: {
          //     show: false,
          //   },
          //   max: 100,
          //   axisLine: {
          //     show: false,
          //   },
          //   axisLabel: {
          //     show: true,
          //     formatter: "{value} %", //右侧Y轴文字显示
          //     textStyle: {
          //       color: "rgba(250,250,250,1)",
          //       fontSize: 11,
          //     },
          //   },
          // },
        ],
        legend: {
          top: "top",
          top: "5%",
          right: "20%",
          textStyle: {
            color: "rgba(250,250,250,1)",
            fontSize: 16,
          },
        },
        series: [
          {
            name: this.nameOne + "航班" + this.line + "月每天收入", //"某航班某月每天收入"
            type: "line",
            stack: "总量",
            data: this.dataTwo_b, //数据[120, 132, 101]
          },
          // {
          //   name: this.nameOne, // "总旅客量"
          //   type: "bar",
          //   barWidth: 15,
          //   itemStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         { offset: 0, color: "rgba(15,197,243,1)" },
          //         { offset: 1, color: "rgba(15,197,243,0)" },
          //       ]),
          //       borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         { offset: 0, color: "rgba(180,240,255,1)" },
          //         { offset: 1, color: "rgba(15,197,243,1)" },
          //       ]),
          //       borderWidth: 1,
          //     },
          //   },
          //   data: [123,231,153,654,898,652,156,654,879], ////////////y的值[10000,16548,65486,84652,98746,56854]
          // },
        ],
      };
      myChart.setOption(option);
    },
    btn(index) {
      this.line = index;
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      //参数
      // var str = this.flight + " " + this.company;
      // console.log(str);

      formData.append("month", index);

      this.$indicator.open({ text: "加载中..." });
      // this.$http.get("http://127.0.0.1:8080/pic8.json")
      this.$http
        .post("http://192.168.193.209:8000/index/", formData, config)
        .then((res) => {
          this.$indicator.close();
          var store = res.data;
          var dataOne = store[0];
          var dataTwo = store[1];
          ///////////////////////////////////////////////////////////////
          var dataOne_a = [];
          var dataOne_b = [];
          var dataOne_c = [];
          // console.log(store);
          for (let index = 0; index < dataOne.length; index++) {
            dataOne_a.push(dataOne[index][0]);
            dataOne_b.push(dataOne[index][1]);
            dataOne_c.push(dataOne[index][2]);
          }

          // console.log(dataOne_c);
          var dataOne_c_filter = [];
          // console.log(dataOne_c);
          for (let index = 0; index < dataOne_c.length; index++) {
            var str = dataOne_c[index].replace("%", "");
            var str = parseFloat(str);
            dataOne_c_filter.push(str);
          }
          // console.log(store);

          /////////////////////////////////////////////////////////////////////////////////////////////////////////

          var dataTwo_a = [];
          var dataTwo_b = [];
          for (let index = 0; index < dataTwo.length; index++) {
            dataTwo_a.push(dataTwo[index][0]);
            dataTwo_b.push(dataTwo[index][1]);
            // dataTwo_c.push(dataThree[index][1]);
          }

          /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          this.$store.commit("component8/setdataOne_a", dataOne_a);
          this.$store.commit("component8/setdataOne_b", dataOne_b);
          this.$store.commit("component8/setdataOne_c", dataOne_c_filter);
          //////////////////////////////////
          this.$store.commit("component8/setdataTwo_a", dataTwo_a);
          this.$store.commit("component8/setdataTwo_b", dataTwo_b);
          this.$store.commit("component8/setlinexx", index);
        });
    },
  },
  watch: {
    "$store.state.component8.dataTwo_a"() {
      this.title = [];
      this.title.push(this.nameOne + "航班" + this.line + "月每天收入");

      this.drawChart();
      //  console.log(this.dataOne_c_filter);
    },
    "$store.state.component8.linexx"() {
      this.line = this.linexx;
    },
  },
};
</script>

<style>
.zhu {
  width: 100%;
  height: 100%;
}
</style>