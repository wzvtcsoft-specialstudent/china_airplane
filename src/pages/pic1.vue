<template>
  <!-- <div id="app"> -->
  <div id="pic5" style="width: 100%; height: 100%" @click='select()' @dblclick='dblclick()'></div>
  <!-- </div> -->
</template>

<script>
export default {
  // name: "app",
  mounted() {
    this.drawChart();
    this.pull();
  },
  data() {
    return {
      trafficWay:[],
      circle:[]
    };
  },
  methods: {
    drawChart() {
      const myChart = this.$echarts.init(document.getElementById("pic5"));
      var trafficWay = this.trafficWay
      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000",
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 10,
                borderColor: color[i],
                shadowColor: color[i],
              },
            },
          },
          {
            value: 2,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
              },
            },
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [0, 50],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function (params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return (
                      params.name + "\n" + "占百分比：" + params.value+"%"
                    );
                  } else {
                    return "";
                  }
                },
              },
              labelLine: {
                length: 30,
                length2: 15,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      const option = {
        backgroundColor: "rgba(200,200,200,0.1)",
        title: {
          text: "航空公司运营收入占比",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 14,
          },
        },
        color: color,
        title: {
          text: "航空公司运营收入占比",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 14,
          },
          top: "4%",
          left: "center",
        },
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                width: 178,
                height: 178,
              },
              left: "center",
              top: "center",
              position: [100, 100],
            },
          ],
        },
        tooltip: {
          show: false,
        },
        legend: {
          icon: "circle",
          // orient: "horizontal",
          // x: 'left',
          data:this.circle,//数据[["语言、文学", "自然科学",]
          // right: 200,
          // bottom: 100,
          // align: "center",
          top: "bottom",
          textStyle: {
            color: "#fff",
            fontSize: 11,
          },
          // itemGap: 20,
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
                seriesData.filter(function(item,index){return !(index%2);}).forEach((obj) => {
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
        series: seriesOption,
      };
      myChart.setOption(option);
    },
    pull(){
      this.$indicator.open({ text: "加载中..." });
      // 实际参数接口get（"http://192.168.193.65:8000/a"）
      this.$http.get("http://192.168.193.209:8000/a").then((res) => {
        // this.$http.get("http://127.0.0.1:8080/pic1.json").then((res) => {
        this.$indicator.close();
        var store = res.data;
        var data = [];
        var dataName=[];
        for (let index = 0; index < store.length; index++) {
          var obj = {};
          obj.name = store[index][0];
          dataName.push(store[index][0])
          var str = store[index][1].replace("%", "");
          obj.value =parseInt(str);
          data.push(obj);
        }

        this.trafficWay=data
        this.circle=dataName
        this.drawChart()
      });
    },
    select(){
       this.$emit('showCityName');
    },
    dblclick(){
      this.$emit('pic1Dblclick');
    }
  },
};
</script>

<style>
</style>
