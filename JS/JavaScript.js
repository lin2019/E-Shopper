// 鼠标点击展示商品列表
var ico = document.getElementsByClassName('icon-plus');
var hlist = document.getElementsByClassName('showHide');
for(var i = 0;i < ico.length;i++){
    ico[i].index = i;
    var num = 0;
    (function (i) {
        ico[i].onclick = function () {
            num++;
            if(num % 2 == 0){
                hlist[i].style.height = '0';
            }
            else {
                hlist[i].style.height = '200px';
            }
        }
    })(i)

}
