<template>
  <div class="box">
    <!-- 背景模块 -->
    <!-- <div class="map">
      <div class="map1"></div>
      <div class="map2"></div>
      <div class="map3"></div>
    </div> -->
    <iframe
      class="w-full h-full"
      seamless=""
      src="background/test.html"
    ></iframe>
    <div
      class="right-top"
      @click="flexible"
      :class="{ 'right-top1': (active = cla) }"
    ></div>
    <div id="g1" class="list g1-post" :class="{ show: val }">
      <div class="item left-class" data-id="0">
        <div class="g1Top" :class="{ g1s: g1sShow }">已用</div>
        <img src="../assets/image/11.png" style="width: 100%; height: 200px" />
      </div>
      <div class="item left-class" data-id="1">
        <div class="g1Top" :class="{ g1s1: g1sShow1 }">已用</div>
        <img src="../assets/image/12.png" style="width: 100%; height: 200px" />
      </div>
      <div class="item left-class" data-id="2">
        <div class="g1Top" :class="{ g1s2: g1sShow2 }">已用</div>
        <img src="../assets/image/13.png" style="width: 100%; height: 200px" />
      </div>
      <div class="item left-class" data-id="3">
        <div class="g1Top" :class="{ g1s3: g1sShow3 }">已用</div>
        <img src="../assets/image/14.png" style="width: 100%; height: 200px" />
      </div>
      <div class="item left-class" data-id="4">
        <div class="g1Top" :class="{ g1s4: g1sShow4 }">已用</div>
        <img src="../assets/image/15.png" style="width: 100%; height: 200px" />
      </div>
      <div class="item left-class" data-id="5">
        <div class="g1Top" :class="{ g1s5: g1sShow5 }">已用</div>
        <img src="../assets/image/16.png" style="width: 100%; height: 200px" />
      </div>
    </div>
    <div class="oTop" v-if="oTopShow">
      <div class="oTopBtn" @click="close()"></div>
      <div class="p1" v-if="p1">
        <pic1></pic1>
      </div>
      <div class="p1" v-if="p2">
        <pic2></pic2>
      </div>
      <div class="p1" v-if="p4">
        <pic4></pic4>
      </div>
      <div class="p1" v-if="p5">
        <pic5></pic5>
      </div>
      <div class="p1" v-if="p6">
        <pic6></pic6>
      </div>
      <div class="p1" v-if="p7">
        <pic7></pic7>
      </div>
      <div class="p1" v-if="p8">
        <pic8></pic8>
      </div>
        <div class="p1" v-if="p9">
        <pic9></pic9>
      </div> 
        <div class="p1" v-if="p10">
        <pic10></pic10>
      </div> 
        <div class="p1" v-if="p11">
        <pic11></pic11>
      </div>    
    </div>
    <div id="g2" class="itxst pa list-height1">
      <!-- <span class="change" @click="click">|||</span> -->
      <div class="pic1 item" data-id="1" v-if="picVal1">
        <div class="rect1">
          <pic1 class="" @showCityName="updateCity" @pic1Dblclick="pic1dblclick()"></pic1>
        </div>
      </div>
      
      <div class="pic9 item" data-id="9" v-if="picVal9">
        <div class="rect1">
          <pic9 class="" @pic9Dblclick="pic9dblclick()"></pic9>
        </div>
      </div>

      <div class="pic2">
        <div class="mask" :class="{ maskShow: maskBl }">暂无数据</div>
        <div class="rect1">
          <pic2 class="" data-id="2" @pic2Dblclick="pic2dblclick()"></pic2>
        </div>
      </div>
    </div>
    <div id="g3">
      <div class="biaot"><span>机场航线、航班与旅客量预测</span></div>
      <div class="pic">
        <div class="rect2">
          <pic3 class="" data-id="3" @pic3Fresh="Fresh()"></pic3>
        </div>
      </div>
      <div class="pic11 item" data-id="4" v-if="picVal4">
        <div class="rect3">
          <pic4 class="" data-id="4" @pic4Dblclick="pic4Dblclick()"></pic4>
        </div>
      </div>
      <div class="pic12 item" data-id="6" v-if="picVal6">
        <div class="rect3">
          <pic6 class="" data-id="6" @pic6Dblclick="pic6Dblclick()"></pic6>
        </div>
      </div>
      <div class="pic13 item" data-id="10" v-if="picVal10">
        <div class="rect3">
          <pic10 class="" data-id="10" @pic10Dblclick="pic10dblclick()"></pic10>
        </div>
      </div>
      <div class="pic14 item" data-id="11" v-if="picVal11">
        <div class="rect3">
          <pic11 class="" data-id="11" @pic11Dblclick="pic11dblclick()"></pic11>
        </div>
      </div>
      <!-- <div class="pic13">
        <but class="left-class" data-id="7"></but>
      </div> -->
    </div>
    <div id="g4">
      <div class="pic3">
        <div class="rect">
          <pic5 class="" data-id="5" @pic5Click="Click()" @pic5Mouseover="Mouseover()" @pic5Fresh="Fresh()" @pic5Dblclick="pic5dblclick()"></pic5>
        </div>
      </div>
      <div class="pic4">
        <div class="rect">
          <pic7 class="" data-id="5" @pic7Click="Click()" @pic7Mouseover="Mouseover()" @pic7Fresh="Fresh()" @pic7Dblclick="pic7dblclick()"></pic7>
        </div>
      </div>
      <div class="pic5">
        <div class="rect">
          <pic8 class="" data-id="5" @pic8Click="Click()" @pic8Mouseover="Mouseover()" @pic8Fresh="Fresh()" @pic8Dblclick="pic8dblclick()"></pic8>
        </div>
      </div>  
    </div>

  
  </div>
</template>


<script>
import Sortable from "sortablejs";
import pic1 from "../pages/pic1";
import pic2 from "../pages/pic2";
import pic3 from "../pages/pic3";
import pic4 from "../pages/pic4";
import pic5 from "../pages/pic5";
import pic6 from "../pages/pic6";
import pic7 from "../pages/pic7";
import pic8 from "../pages/pic8";
import pic9 from "../pages/pic9";
import pic10 from "../pages/pic10";
import pic11 from "../pages/pic11";
import "../css/home.css";
import upld from "./upload"
export default {
  name: "Home",
  mounted() {
    this.pull();
  },
  data() {
    return {
      val: true,
      picVal1: true,
      picVal9: false,
      picVal4: false,
      picVal6: true,
      picVal10: false,
      picVal11: false,
      maskBl: true,
      ////////////////////////////////////
      g1sShow: false,
      g1sShow1: true,
      g1sShow2: false,
      g1sShow3: true,
      g1sShow4: true,
      g1sShow5: true,
      cla: false,
      ////////////////////////////////////
      p1:false,
      p2:false,
      p4:false,
      p5:false,
      p6:false,
      p7:false,
      p8:false,
      p9:false,
      p10:false,
      p11:false,
      oTopShow:false
    };
  },
  components: {
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    upld,
  },
  methods: {
    click() {
      this.val = !this.val;
    },
    pull() {
      //第一组
      var moveItemId = -1;
      var g1 = document.getElementById("g1");
      var ops1 = {
        animation: 1000,
        draggable: ".item",
        //*******************************************************
        //*********A组内的元素不允许排序,但是可以拖动到B组*******
        //*******************************************************
        sort: false,
        group: {
          name: "it",
          pull: false,
        },
        //拖动结束
        // onEnd: function (evt) {
        //   // console.log(evt);
        //   //获取拖动后的排序
        //   // var arr = sortable2.toArray();
        //   // document.getElementById("msg").innerHTML = "A组排序结果：" + JSON.stringify(arr);
        //   // console.log(JSON.stringify(arr));
        // },
        onEnd: (evt) => {
          //  var index=evt.oldIndex;
          var index = evt.clone.getAttribute("data-id");
          ////////////////////////////////////////////////
          var arr2 = sortable2.toArray().length;
          var arr3 = sortable3.toArray().length;
          ///////////////////
          if (index == 0 && arr3 == 0) {
            this.picVal6 = true;
            this.g1sShow = false;
          } else if (index == 1 && arr3 == 0) {
            this.picVal4 = true;
            this.g1sShow1 = false;
          } else if (index == 2 && arr2 == 0) {
            this.picVal1 = true;
            this.g1sShow2 = false;
          } else if (index == 3 && arr2 == 0) {
            this.picVal9 = true;
            this.g1sShow3 = false;
          } else if (index == 4 && arr3 == 0) {
            this.picVal10 = true;
            this.g1sShow4 = false;
          } else if (index == 5 && arr3 == 0) {
            this.picVal11 = true;
            this.g1sShow5 = false;
          }
        },
      };
      var sortable1 = Sortable.create(g1, ops1);

      //第二组
      var g2 = document.getElementById("g2");
      var ops2 = {
        animation: 1000,
        draggable: ".item",
        //*******************************************************
        //*********A组内的元素不允许排序,但是可以拖动到B组*******
        //*******************************************************
        sort: false,
        group: {
          name: "it",
          pull: false,
        },
        //拖动结束
        // onEnd: function (evt) {
        //   // console.log(evt);
        //   //获取拖动后的排序
        //   // var arr = sortable2.toArray();
        //   // document.getElementById("msg").innerHTML = "A组排序结果：" + JSON.stringify(arr);
        //   //  console.log(JSON.stringify(arr));
        // },
        onEnd: (evt) => {
          var index = evt.clone.getAttribute("data-id");
          // console.log(index);
          if (index == 1) {
            this.picVal1 = false;
            this.g1sShow2 = true;
          } else if (index == 9) {
            this.picVal9 = false;
            this.g1sShow3 = true;
          }
        },
      };
      var sortable2 = Sortable.create(g2, ops2);
      //第三组
      var g3 = document.getElementById("g3");
      var ops3 = {
        animation: 1000,
        draggable: ".item",
        //*******************************************************
        //********* B组内的元素允许排序,也可以拖动到A组   *******
        //*******************************************************
        sort: false,
        group: {
          name: "it",
          pull: false,
        },
        //拖动结束
        // onEnd: function (evt) {
        //   // console.log(evt);
        //   //获取拖动后的排序
        //   // var arr = sortable3.toArray();
        //   // document.getElementById("msg").innerHTML ="B组排序结果："+ JSON.stringify(arr);
        // },
        onEnd: (evt) => {
          var index = evt.clone.getAttribute("data-id");
          if (index == 4) {
            this.picVal4 = false;
            this.g1sShow1 = true;
            console.log(this.g1sShow);
          } else if (index == 6) {
            this.picVal6 = false;
            this.g1sShow = true;
          } else if (index == 10) {
            this.picVal10 = false;
            this.g1sShow4 = true;
          } else if (index == 11) {
            this.picVal11 = false;
            this.g1sShow5 = true;
          }
        },
      };
      var sortable3 = Sortable.create(g3, ops3);
    },
    flexible() {
      this.val = !this.val;
      this.cla = !this.cla;
    },
    updateCity(){
      // console.log("hello");
    },
    Click(){
      this.$refs.audio.play();
    },
    Mouseover(){
      this.$refs.audioOne.play();
    },
    Fresh(){
      this.$refs.audioTwo.play();
    },
    //////
    pic1dblclick(){
       this.p1=true
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic2dblclick(){
       this.p1=false
       this.p2=true  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic4Dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=true
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic5dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=true
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic6Dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=true
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic7dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=true
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=false
       this.oTopShow=true
    },
    pic8dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=true
       this.p9=false
       this.p10=false 
       this.p11=false
      this.oTopShow=true
    },
    pic9dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=true
       this.p10=false 
       this.p11=false
      this.oTopShow=true
    },
    pic10dblclick(){
       this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=true 
       this.p11=false
      this.oTopShow=true
    },
    pic11dblclick(){
    this.p1=false
       this.p2=false  
       this.p4=false
       this.p5=false
       this.p6=false
       this.p7=false
       this.p8=false
       this.p9=false
       this.p10=false 
       this.p11=true
      this.oTopShow=true
    },
    close(){
      // console.log('11');
       this.oTopShow=false
    }
  },
  watch: {
    "$store.state.component5.maskShow"() {
      this.maskBl = this.$store.state.component5.maskShow;
      console.log(this.maskBl);
    },
  },
};
</script>


   <style>
</style>
