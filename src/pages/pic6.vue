<template>
  <!-- <div id="app"> -->
  <div class="zhu">
    <button
      id="1"
      class="btn1"
      @click="btn(5)"
      style="left: 250px"
      :class="line == 5 ? 'contactsbgOne' : ''"
    >
      5
    </button>
    <button
      id="2"
      class="btn1"
      @click="btn(6)"
      style="left: 310px"
      :class="line == 6 ? 'contactsbgOne' : ''"
    >
      6
    </button>
    <button
      id="3"
      class="btn1"
      @click="btn(7)"
      style="left: 370px"
      :class="line == 7 ? 'contactsbgOne' : ''"
    >
      7
    </button>
    <button
      id="4"
      class="btn1"
      @click="btn(8)"
      style="left: 430px"
      :class="line == 8 ? 'contactsbgOne' : ''"
    >
      8
    </button>
    <button
      id="5"
      class="btn1"
      @click="btn(9)"
      style="left: 490px"
      :class="line == 9 ? 'contactsbgOne' : ''"
    >
      9
    </button>
    <button
      id="6"
      class="btn1"
      @click="btn(10)"
      style="left: 550px"
      :class="line == 10 ? 'contactsbgOne' : ''"
    >
      10
    </button>
    <div id="pic3" style="width: 100%; height: 200%"></div>
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
      line: -1,
      title: [],
    };
  },
  mounted() {
    this.title = [];
    this.title.push(this.nameOne + "客座率");
    this.title.push(this.nameOne + "总旅客量");
    this.title.push("123456")

    this.drawChart();
    this.line = this.$store.state.component8.linex;
  },
  computed: {
    ...mapState("component8", [
      "dataOne_a",
      "dataOne_b",
      "dataOne_c_filter",
      "linex",
      "nameOne",
    ]),
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic3"));
      const option = {
        backgroundColor: "rgba(100,100,100,0.2)",
        grid: {
          top: "25%",
          bottom: "15%",
          left: "5%",
          right: "7%",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: {
              show: true,
              title: "图标数据",
              lang: ["图标数据:", "关闭", "导出Excel"],
              contentToOption: function (opts) {
                $("#tableExcel_Day").table2excel({
                  // 下载jquery.table2excel.js，引入，$("#tempChart")是Echarts容器
                  exclude: ".noExl",
                  // 过滤位置的 css 类名， 有class = “noExl” 的行不被导出
                  filename: " 航空公司运营收入占比.xls",
                  // 文件名称
                  name: "Excel Document Name.xls",
                  exclude_img: true,
                  exclude_links: true,
                  exclude_inputs: true,
                });
              },
              // 数据视图展示为table
              optionToContent: function (opt) {
                var seriesData = opt.series[0].data;
                var tdHeads =
                  '<td  style="padding: 0 10px">名称</td>' +
                  '<td  style="padding: 0 10px">数值</td>';
                var table =
                  '<table id="tableExcel_Day" border="1" class="table-bordered table-striped" style="width:100%;text-align:center" ><tbody><tr>' +
                  tdHeads +
                  " </tr>";
                seriesData.forEach((obj) => {
                  table +=
                    '<tr><td style="padding: 0 5px">' +
                    obj.name +
                    "</td>" +
                    "<td>" +
                    obj.value +
                    "</td>";
                });
                table += "</tbody></table>";
                return table;
              },
            },
            restore: { show: false },
            saveAsImage: { show: false },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
            },
          },
          padding: [10, 10],
        },

        legend: {
          data: this.title, //数据["总旅客量", "客坐率"]
          top: "5%",
          right: "5%",
          textStyle: {
            color: "rgba(250,250,250,1)",
            fontSize: 16,
          },
        },
        xAxis: {
          data: ["区域1","区域2","区域3","区域1","区域2","区域3","区域1","区域2","区域3"], //////x的值["区域1","区域2","区域3"]
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
              color: "rgba(250,250,250,1)", //X轴文字颜色
              fontSize: 12,
            },
          },
          // splitArea: {
          //   show: true,
          //   areaStyle: {
          //     color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"],
          //   },
          // },
        },
        yAxis: [
          {
            type: "value",
            /*name: "亿元",*/
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
                color: "rgba(250,250,250,1)",
                fontSize: 12,
              },
            },
          },
          {
            type: "value",
            /*name: "亿元",*/
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
              formatter: "{value} %",
              textStyle: {
                color: "rgba(250,250,250,1)",
                fontSize: 12,
              },
            },
          },
          {
            type: "value",
            /*name: "同比",*/
            nameTextStyle: {
              color: "#ebf8ac",
              fontSize: 8,
            },
            position: "right",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            max: 100,
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter: "{value}", //右侧Y轴文字显示
              textStyle: {
                color: "rgba(250,250,250,1)",
                fontSize: 11,
              },
            },
          },
        ],
        series: [
          {
            name: this.nameOne + "客座率", //"客坐率"
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#10EEA0",
              borderColor: "#3D7EEB",
              width: 2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4,
            },
            lineStyle: {
              color: "#3D7EEB",
              width: 2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(61,126,235, 0.5)",
                },
                {
                  offset: 1,
                  color: "rgba(61,126,235, 0)",
                },
              ]),
            },
            data: [67,95,84,26,48,56], /////百分比 [67,95,84,26,48,56]
          },
          {
            name: this.nameOne + "总旅客量", // "总旅客量"
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(15,197,243,1)" },
                  { offset: 1, color: "rgba(15,197,243,0)" },
                ]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(180,240,255,1)" },
                  { offset: 1, color: "rgba(15,197,243,1)" },
                ]),
                borderWidth: 1,
              },
            },
            data: [10000,16548,65486,84652,98746,56854], ////////////y的值[10000,16548,65486,84652,98746,56854]
          },
          {
            name: "123456", // "总旅客量"
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(215,197,243,1)" },
                  { offset: 1, color: "rgba(215,197,243,0)" },
                ]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(180,240,255,1)" },
                  { offset: 1, color: "rgba(215,197,243,1)" },
                ]),
                borderWidth: 1,
              },
            },
            data: [10000,16548,65486,84652,98746,56854], ////////////y的值[10000,16548,65486,84652,98746,56854]
          },
        ],
      };
      myChart.setOption(option);

      ////////////////
      //    myChart.setOption({
      //   yAxis: {
      //     type: "category",
      //     data: (this.com3||{}).flight,
      //   },
      //   series: [
      //     {
      //       name: "起降架次",
      //       type: "bar",
      //       data: (this.com3||{}).sortie,
      //     },
      //     {
      //       name: "吞吐量",
      //       type: "bar",
      //       data: (this.com3||{}).throughput,
      //     },
      //   ],
      // });
    },
    btn(index) {
      this.line = index;
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
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
          this.$store.commit("component8/setlinex", index);
        });
    },
  },
  watch: {
    "$store.state.component8.dataOne_a"() {
      this.title = [];
      this.title.push(this.nameOne + "客座率");
      this.title.push(this.nameOne + "总旅客量");
      this.title.push("123456")

      this.drawChart();
      //  console.log(this.dataOne_c_filter);
    },
    "$store.state.component8.linex"() {
      this.line = this.linex;
    },
  },
};
</script>

<style>
</style>