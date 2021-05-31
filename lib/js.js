var moveItemId = -1;
var g1 = document.getElementById('g1');
var ops1 = {
    animation: 1000,
    draggable: ".item",
    //*******************************************************
    //*********A组内的元素不允许排序,但是可以拖动到B组*******
    //*******************************************************
    sort: true,
    group: 'it', 
    //拖动结束
    onEnd: function (evt) {
        // console.log(evt);
        //获取拖动后的排序
        var arr = sortable1.toArray();
        // document.getElementById("msg").innerHTML = "A组排序结果：" + JSON.stringify(arr);
    },
};
var sortable1 = Sortable.create(g1, ops1);
//第二组
var g2 = document.getElementById('g2');
var ops2 = {
    animation: 1000,
    draggable: ".item",
      //*******************************************************
      //********* B组内的元素允许排序,也可以拖动到A组   *******
      //*******************************************************
    sort: true,
    group: 'it', 
    sort: true,
    //拖动结束
    onEnd: function (evt) {
        // console.log(evt);
        //获取拖动后的排序
        var arr = sortable2.toArray();
        // document.getElementById("msg").innerHTML ="B组排序结果："+ JSON.stringify(arr);
    },
};
var sortable2 = Sortable.create(g2, ops2);