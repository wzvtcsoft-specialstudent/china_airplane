export default function roll (id) {
    window.onload=function () {
        var scrollTab=document.getElementsByClassName('tab-scroll')[0];//滚动的表格
        var tbody=scrollTab.getElementsByTagName('tbody')[0];//tbody

        var speed=scrollTab.getElementsByTagName('td')[0].offsetHeight+1;//行高(滚动速度)	 加上表格边框	
        var count=0;//要追加到表格底部的行索引 	
        setInterval(scrollTop,1500);//每隔1.5秒滚动一次


        //实现表格向上滚动
        function scrollTop(){
            var t=scrollTab.offsetTop;//top值
            scrollTab.style.top=t-speed+'px';//滚动

            var trs=tbody.getElementsByTagName('tr');//每次都重新取出所有内容行				
            var newTr=trs[count].cloneNode(true);//复制行，得到新的行对象
            //将滚动的行追加到表格底部
            tbody.appendChild(newTr);
            count++;
        }
    };
}