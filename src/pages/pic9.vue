<template>
  <div id="app">
    <div class="pai">机场吞吐量</div>
    <div class="Btn">
      <button class="btn" style="left: 170px" @click="btn('前5')">前五</button>
      <button class="btn" @click="btn('后5')">后五</button>
    </div>
    <div id="pic11" style="width: 100%; height: 100%" @dblclick='dblclick()'></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import echarts from "echarts";
export default {
  name: "app",
  computed: {
    ...mapState("component9", ["data"]),
  },
  data() {
    return {
      // data: {},
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("pic11"));
      // const option = {
      //   backgroundColor: "rgba(200,200,200,0.1)",
      //   // grid: {
      //   //   top: '15%',
      //   //   right: '10%',
      //   //   left: '10%',
      //   //   bottom: '12%',
      //   // },
      //   grid: {
      //     left: "15%",
      //     bottom: "10%",
      //     top: "30%",
      //   },
      //   legend: {
      //     // top: "bottom",
      //     textStyle: {
      //       //图例文字的样式
      //       color: "#000",
      //       fontSize: 12,
      //     },
      //   },
      //   xAxis: [
      //     {
      //       type: "category",
      //       color: "#fff",
      //       data: this.data.flight,////////数据【】
      //       axisLabel: {
      //         margin: 5,
      //         color: "#fff",
      //         textStyle: {
      //           fontSize: 8,
      //         },
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: "rgb(255,255,255)",
      //         },
      //       },
      //       axisTick: {
      //         show: false,
      //       },
      //     },
      //   ],
      //   yAxis: [
      //     {
      //       // min: 0,
      //       // max: 100,
      //       axisLabel: {
      //         formatter: "{value}",
      //         color: "#fff",
      //         textStyle: {
      //           fontSize: 8,
      //         },
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: "rgb(255,255,255)",
      //         },
      //       },
      //       axisTick: {
      //         show: false,
      //       },
      //       splitLine: {
      //         lineStyle: {
      //           color: "rgba(131,101,101,0.2)",
      //           type: "dashed",
      //         },
      //       },
      //     },
      //   ],

      //   series: [
      //     {
      //       type: "bar",
      //       data: this.data.sortie,///////数据【】
      //       barWidth: "40px",
      //       itemStyle: {
      //         normal: {
      //           color: function (params) {
      //             let num = colorArr.length;
      //             return new echarts.graphic.LinearGradient(
      //               0,
      //               0,
      //               0,
      //               1,
      //               [
      //                 {
      //                   offset: 0,
      //                   color: colorArr[params.dataIndex % num].top, // 0% 处的颜色
      //                 },
      //                 {
      //                   //可根据具体情况决定哪根柱子显示哪种颜色
      //                   offset: 1,
      //                   color: colorArr[params.dataIndex % num].bottom, // 100% 处的颜色
      //                 },
      //               ],
      //               false
      //             );
      //           },
      //           barBorderRadius: [30, 30, 0, 0],
      //         },
      //       },
      //       label: {
      //         normal: {
      //           show: true,
      //           fontSize: 10,
      //           fontWeight: "bold",
      //           color: "#fff",
      //           position: "top",
      //         },
      //       },
      //     },
      //   ],
      // };
      const option = {
        backgroundColor: "rgba(200,200,200,0.1)",
        tooltip: {
          trigger: "axis",
          show: false,
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          selectedMode: false,
        },
        grid: {
          left: "3%",
          right: "10%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            // color: "#fff",
            splitLine: {
              show: false,
            },
            type: "value",
            show: false,
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: false,
            },
            axisLine: {
              //y轴
              show: false,
            },
            type: "category",
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
            },
            data: this.data.flight,
            axisLabel: {
              color:"#fff"
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 20, // 柱子宽度
            label: {
              show: true,
              position: "right", // 位置
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold", // 加粗
              distance: 5, // 距离
            }, // 柱子上方的数值
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                ["#2FAEF2", "#1CD8A8"].map((color, offset) => ({
                  color,
                  offset,
                }))
              ), // 渐变
            },
            data: this.data.sortie,
          },
        ],
      };
      myChart.setOption(option);
    },
    btn(name) {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      //参数
      formData.append("rank", name);

      this.$indicator.open({ text: "加载中..." });
      //实际参数接口post（"http://192.168.193.65:8000/index/", formData, config）
      //  this.$http.get("http://127.0.0.1:8080/pic3.json").then((res) => {
      this.$http
        .post("http://192.168.193.209:8000/index/", formData, config)
        .then((res) => {
          this.$indicator.close();
          var store = res.data;
          var flight = [];
          var sortie = [];
          for (let index = 0; index < store.length; index++) {
            var obj = store[index][0] + "/" + store[index][1];
            flight.push(obj);
            var obj1 = store[index][2];
            sortie.push(obj1);
          }

          var component3 = {};
          component3.flight = flight;
          component3.sortie = sortie;

          this.data = component3;

          this.$store.commit("component9/setdata", component3);
          this.drawChart();
        });
    },
    dblclick(){
      this.$emit('pic9Dblclick');
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
.pai {
  float: left;
  width: 80px;
  margin-top: 5%;
  margin-left: 15%;
  font-size: 14px;
  font-weight: bold;
  color: aliceblue;
}
.Btn {
  float: left;
  width: 200px;
  margin-top: 10px;
  /* margin-left: 10px; */
}
.btn {
  position: absolute;
  z-index: 990;
  font-size: 1px;
  border: 1px solid rgb(0, 110, 255);
  background-color: rgb(0, 87, 158);
  border-radius: 5px;
  color: aliceblue;
  width: 50px;
  height: 30px;
  margin-left: 10px;
}
.btn:hover {
  position: absolute;
  z-index: 999;
  font-size: 1px;
  border: 1px solid rgb(0, 110, 255);
  background-color: rgb(68, 146, 209);
  border-radius: 5px;
  color: aliceblue;
  width: 50px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
}
.btn:hover {
  font-size: 3px;
  border: 1px solid #ccc;
  background-color: rgb(40, 157, 253);
}
.pic11 {
  position: absolute;
  margin-left: 20px;
}
</style>