<template>
  <!-- <div id="app"> -->
  <div id="pic1" style="width: 100%; height: 100%" @dblclick='dblclick()'></div>
  <!-- </div> -->
</template>

<script>
import echarts from "echarts";
import { mapState, mapGetters } from "vuex";
export default {
  // name: "app",
  data() {
    return {
      namex: "",
    };
  },
  mounted() {
    this.drawChart();
  },
  computed: {
    ...mapState("component3", ["com3"]),
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic1"));
      var checkName = ''
      const option = {
        backgroundColor: "rgba(200,200,200,0.1)",
        color: ["#1890ff", "#1f9"],
        grid: {
          top: "20%",
          right: "18%",
          left: "12%",
          bottom: "10%",
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
                  filename: " 起降架次与吞吐量.xls",
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
                  '<td  style="padding: 0 10px">起降架次</td>' +
                  '<td  style="padding: 0 10px">数值</td>' +
                  '<td  style="padding: 0 10px">吞吐量</td>' +
                  '<td  style="padding: 0 10px">数值</td>';
                var table =
                  '<table id="tableExcel_Day" border="1" class="table-bordered table-striped" style="width:100%;text-align:center" ><tbody><tr>' +
                  tdHeads +
                  " </tr>";
                seriesData.forEach((obj) => {
                  table +=
                    '<tr><td style="padding: 0 5px">' +
                    obj.flight +
                    "</td>" +
                    "<td>" +
                    obj.company +
                    "</td>"+
                    "<td>" +
                    obj.average +
                    "</td>"+
                    "<td>" +
                    obj.max +
                    "</td></tr>";
                });
                table += "</tbody></table>";
                return table;
              },
            },
            restore: { show: false },
            saveAsImage: { show: false },
          },
        },
        legend: {
          top: 5,
          left: 100,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 16,
            color: "#fff",
            padding: [3, 8, 0, 2],
          },
          data: ["起降架次", "吞吐量"],
        },

        xAxis: [
          {
            type: "category",
            data: this.com3.flight, //shuju['sa']
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              interval: 0,
              textStyle: {
                fontSize: 9,
              },
              fontFamily: "LCDEF",
            },
          },
        ],
        yAxis: [
          {
            name: "",
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            type: "value",
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#384267",
              },
            },
            axisLabel: {
              color: "#fff",
              fontSize: "10",
            },
          },
          {
            type: "value",
            name: "",
            position: "right",
            axisLabel: {
              formatter: "{value}",
              color: "#fff",
            },
            // max: 100,
            splitLine: {
              show: false,
            },
            axisPointer: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#27719F",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "起降架次",
            barWidth: "20",
            data: this.com3.throughput, //[1,2]
            itemStyle: {
              normal: {
                // label:{show:true},
                color: function (params) {
                  //判断选中的名字改变柱子的颜色样式
                  if (checkName === params.name) {
                    return "#42FFFD";
                  } else {
                    return "#42B7FD";
                  }
                },
              },
            },
          },
          {
            type: "line",
            name: "吞吐量",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                // label:{show:true},
                color: function (params) {
                  //判断选中的名字改变柱子的颜色样式
                  if (checkName === params.name) {
                    return "#4200FD";
                  } else {
                    return "#005578";
                  }
                },
              },
            },
            symbolSize: 10,
            symbol: "circle",
            data: this.com3.sortie,
          },
        ],
      };
      myChart.setOption(option);

      myChart.on("click", (map)=>{
        var str = map.name;
        this.namex = str.substring(4, 7);
        ///////////////////////////////
        checkName = map.name;
        myChart.setOption(option);
        ////////////////////
        this.click()
      });
      myChart.on("mouseover", (map)=>{
        this.mouseover()
      });

      //////////////////////
      // myChart.setOption({
      //   yAxis: {
      //     type: "category",
      //     data: (this.com3 || {}).flight,
      //   },
      //   series: [
      //     {
      //       name: "起降架次",
      //       type: "bar",
      //       data: (this.com3 || {}).throughput,
      //     },
      //     {
      //       name: "吞吐量",
      //       type: "bar",
      //       data: (this.com3 || {}).sortie,
      //     },
      //   ],
      // });
    },
    click(){
       this.$emit('pic5Click');
    },
    mouseover(){
       this.$emit('pic5Mouseover');
    },
    fresh(){
      this.$emit('pic5Fresh');
    },
    dblclick(){
      this.$emit('pic5Dblclick');
    } 
  },
  watch: {
    "$store.state.component3.com3"() {
      this.drawChart();
      // console.log(this.com3);
    },
    namex(newVal) {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      //参数

      // var str=newVal.substring(0,3)
      // console.log(str);

      formData.append("airport", newVal);

      this.$indicator.open({ text: "加载中..." });
      //实际参数接口post（"http://192.168.193.65:8000/index/", formData, config）
      // this.$http.get("http://127.0.0.1:8080/pic5.json")
      this.$http.post("http://192.168.193.209:8000/index/", formData, config)
        .then((res) => {
          this.$indicator.close();
          var store = res.data;
          // console.log(store);
          var list = [];
          for (let index = 0; index < store.length; index++) {
            if (index == 0) {
              var data = store[index];
              //  console.log(store[index]);
              for (let j = 0; j < data.length; j++) {
                var obj = {};
                obj.flight = data[j][0];
                obj.company = data[j][1];
                obj.average = data[j][2];
                obj.max = data[j][3];
                list.push(obj);
              }
            } else {
              if (store[1] == 0) {
                this.$store.commit("component5/setcomto2", ""); //清空
                this.$store.commit("component5/setmaskShow", false);
              } else {
                this.$store.commit("component5/setmaskShow", true);
                this.$store.commit("component5/setcomto2", store[1]);
              }
            }
          }
          // console.log(list);
          this.$store.commit("component5/setcom5", list);
          this.$store.commit("component5/setname5", newVal);
          
          this.fresh()
        });
    },
  },
};
</script>

<style>
</style>
