<template>
  <!-- <div id="app"> -->
  <div id="pic2" style="width: 100%; height: 100%" @dblclick='dblclick()'></div>
  <!-- </div> -->
</template>

<script>
import echarts from "echarts";
import { mapState, mapGetters } from "vuex";
export default {
  // name: "app",
  mounted() {
    this.drawChart();
  },
  computed: {
    ...mapState("component5", ["name5", "comto2"]),
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic2"));
      const option = {
        backgroundColor: "rgba(200,200,200,0.1)",
        title: {
          text: this.name5,
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 14,
          },
          top: "5%",
          left: "center",
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
                  filename: " 测试.xls",
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
                    '<tr><td style="padding: 0 10px">' +
                    obj.name +
                    "</td>" +
                    "<td>" +
                    obj.value +
                    "</td></td>" +
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
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "25%",
          left: "5%",
          right: "5%",
          bottom: "15%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 10,
              textStyle: {
                color: "#d1e6eb",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "注册总量",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: "#6c50f3",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#6c50f3",
              },
            },
            itemStyle: {
              color: "#6c50f3",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(108,80,243,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(108,80,243,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(108,80,243, 0.9)",
                shadowBlur: 10,
              },
            },
            data: this.comto2, ////////数据[1,2]
          },
        ],
      };
      myChart.setOption(option);
    },
    dblclick(){
      this.$emit('pic2Dblclick');
    }
  },
  watch: {
    "$store.state.component5.name5"() {
      this.drawChart();
      //  console.log(this.dataOne_c_filter);
      //   console.log(this.name5);
    },
  },
};
</script>

<style>
</style>