window.onload = function () {
    //兼容ie的getElementsByClassName 
    if(!document.getElementsByClassName){  
        document.getElementsByClassName = function(className, element){  
            var children = (element || document).getElementsByTagName('*');  
            var elements = new Array();  
            for (var i=0; i<children.length; i++){  
                var child = children[i];  
                var classNames = child.className.split(' ');  
                for (var j=0; j<classNames.length; j++){  
                    if (classNames[j] == className){   
                        elements.push(child);  
                        break;  
                    }  
                }  
            }   
            return elements;  
        };  
    } 


    var oDiv = document.getElementById('nav');
    var aLi = oDiv.getElementsByTagName('li');
    var i=0;
    for (var i = 0; i < aLi.length; i++) {
        if(aLi[i].className == 'nav-li')
        {
            aLi[i].onmouseover=function()         //头部导航鼠标滑过显示二级菜单
            {
                var oDivList=this.getElementsByTagName('div')[1];
                oDivList.style.display='block';
            };
            aLi[i].onmouseout=function()           //头部导航鼠标离开隐藏二级菜单
            {
                var oDivList=this.getElementsByTagName('div')[1];
                oDivList.style.display='none';
            };
        }
    }


    //昌农计划轮播里面的进度条
    function jindu(target) {
        var iNow = 0;   //当前进度条的值
        var timers = setInterval(function(){
            if (iNow==target) {
                clearInterval(timers)
            } else {
                iNow += 2;       //iNow每次加2
                progressFn(iNow);
            }
        },30);//30毫秒走一次
        function progressFn(cent){
            var twopxs1 = document.getElementsByClassName('twopxs')[0];
            var twopx1 = document.getElementsByClassName('twopx')[0];
            var rated1 = document.getElementsByClassName('rated')[0];
            var allWidth = parseInt(getStyle(twopxs1,'width'));//获取进度条父层twopxs的宽度并转换为整数
            twopx1.style.clip = 'rect(0px,'+ cent/100*allWidth +'px,10px,0px)'
            rated1.innerHTML = cent + '%';
            function getStyle(obj,attr) {           //获取样式
                if (obj.currentStyle) {             //兼容ie
                    return obj.currentStyle[attr];
                } else {
                    return getComputedStyle(obj,false)[attr];
                }
            }
        }
        //cent百分比参数
    }
    //$(window).scroll(function(event){
      //  jindu(32); 
    //});
    //jindu(32);     //当target的值传人为32%，并执行函数


    //私人定制里面的进度条
    function progressBar1(target) {
        var iNow = 0;   //当前进度条的值
        var timers = setInterval(function(){
            if (iNow==target) {
                clearInterval(timers)
            } else {
                iNow += 2;       //iNow每次加2
                progressFn(iNow);
            }
    },30);//30毫秒走一次
        function progressFn(cent){
            var fanRectangle1 = document.getElementsByClassName('fan-rectangle')[0];
            var fanRectangle11 = document.getElementsByClassName('fan-rectangle1')[0];
            var fanSquare1 = document.getElementsByClassName('fan-square')[0];
            var allWidth = parseInt(getStyle(fanRectangle1,'width'));//获取进度条父层的宽度并转换为整数
            fanRectangle11.style.clip = 'rect(0px,'+ cent/100*allWidth +'px,10px,0px)'   //改变rect里面第二个参数宽度值
            fanSquare1.innerHTML = cent + '%';
            function getStyle(obj,attr) {           //获取样式
                if (obj.currentStyle) {             //兼容ie
                    return obj.currentStyle[attr];
                } else {
                    return getComputedStyle(obj,false)[attr];
                }
            }
        }
        //cent百分比参数
    }
    //$(window).scroll(function(event){
      //  progressBar1(100);
    //});
    //progressBar1(100);     //当target的值传人为100%，并执行函数
    function progressBar2(target) {
        var iNow = 0;   //当前进度条的值
        var timers = setInterval(function(){
            if (iNow==target) {
                clearInterval(timers)
            } else {
                iNow += 2;       //iNow每次加2
                progressFn(iNow);
            }
        },30);//30毫秒走一次
        function progressFn(cent){
            var fanRectangle1 = document.getElementsByClassName('fan-rectangle')[1];
            var fanRectangle11 = document.getElementsByClassName('fan-rectangle1')[1];
            var fanSquare1 = document.getElementsByClassName('fan-square')[1];
            var allWidth = parseInt(getStyle(fanRectangle1,'width'));//获取进度条父层的宽度并转换为整数
            fanRectangle11.style.clip = 'rect(0px,'+ cent/100*allWidth +'px,10px,0px)'   //改变rect里面第二个参数宽度值
            fanSquare1.innerHTML = cent + '%';
            function getStyle(obj,attr) {           //获取样式
                if (obj.currentStyle) {             //兼容ie
                    return obj.currentStyle[attr];
                } else {
                    return getComputedStyle(obj,false)[attr];
                }
            }
        }
        //cent百分比参数
    }
    //$(window).scroll(function(event){
      //  progressBar2(40);
    //});
    //progressBar2(40);     //当target的值传人为100%，并执行函数
    function progressBar3(target) {
        var iNow = 0;   //当前进度条的值
        var timers = setInterval(function(){
            if (iNow==target) {
                clearInterval(timers)
            } else {
                iNow += 2;       //iNow每次加2
                progressFn(iNow);
            }
        },30);//30毫秒走一次
        function progressFn(cent){
            var fanRectangle1 = document.getElementsByClassName('fan-rectangle')[2];
            var fanRectangle11 = document.getElementsByClassName('fan-rectangle1')[2];
            var fanSquare1 = document.getElementsByClassName('fan-square')[2];
            var allWidth = parseInt(getStyle(fanRectangle1,'width'));//获取进度条父层的宽度并转换为整数
            fanRectangle11.style.clip = 'rect(0px,'+ cent/100*allWidth +'px,10px,0px)'   //改变rect里面第二个参数宽度值
            fanSquare1.innerHTML = cent + '%';
            function getStyle(obj,attr) {           //获取样式
                if (obj.currentStyle) {             //兼容ie
                    return obj.currentStyle[attr];
                } else {
                    return getComputedStyle(obj,false)[attr];
                }
            }
        }
        //cent百分比参数
    }
    //$(window).scroll(function(event){
      //  progressBar3(60);
    //});
    //progressBar3(60);     //当target的值传人为100%，并执行函数
    function progressBar4(target) {
        var iNow = 0;   //当前进度条的值
        var timers = setInterval(function(){
            if (iNow==target) {
                clearInterval(timers)
            } else {
                iNow += 2;       //iNow每次加2
                progressFn(iNow);
            }
        },30);//30毫秒走一次
        function progressFn(cent){
            var fanRectangle1 = document.getElementsByClassName('fan-rectangle')[3];
            var fanRectangle11 = document.getElementsByClassName('fan-rectangle1')[3];
            var fanSquare1 = document.getElementsByClassName('fan-square')[3];
            var allWidth = parseInt(getStyle(fanRectangle1,'width'));//获取进度条父层的宽度并转换为整数
            fanRectangle11.style.clip = 'rect(0px,'+ cent/100*allWidth +'px,10px,0px)'   //改变rect里面第二个参数宽度值
            fanSquare1.innerHTML = cent + '%';
            function getStyle(obj,attr) {           //获取样式
                if (obj.currentStyle) {             //兼容ie
                    return obj.currentStyle[attr];
                } else {
                    return getComputedStyle(obj,false)[attr];
                }
            }
        }
        //cent百分比参数
    }

    $(window).scroll(function(event){
        progressBar1(100);
        progressBar2(40);
        progressBar3(60);
        progressBar4(80);
        jindu(32);
    });
    //progressBar4(80);     //当target的值传人为100%，并执行函数


    //大图轮播
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 3;
    var animated = false;
    var interval = 3000;
    var timer;

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;
        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + '%';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + '%';
                if(left>-100){
                    list.style.left = -100 * len + '%';
                }
                if(left<(-100 * len)) {
                    list.style.left = '-100%';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 3) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-100);
        showButton();
    }
    
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 3;
        }
        else {
            index -= 1;
        }
        animate(100);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -100 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();
    


    //昌农计划轮播
    var preved = document.getElementById('prev-div');
    var nexted = document.getElementById('next-div');
    var xDiv1 = document.getElementsByClassName('wrap-1');
    var xDiv2 = document.getElementsByClassName('wrap-2');
    var xDiv3 = document.getElementsByClassName('wrap-3');
    var arr = [];
    for (var i = 0; i < xDiv1.length; i++) {
        arr.push([getStyle(xDiv1[i],'left'),getStyle(xDiv1[i],'top'),getStyle(xDiv1[i],'width'),getStyle(xDiv1[i],'height'),getStyle(xDiv1[i],'zIndex')]);
    }//获取left,top值传人数组
    for (var i = 0; i < xDiv2.length; i++) {
        arr.push([getStyle(xDiv2[i],'left'),getStyle(xDiv2[i],'top'),getStyle(xDiv2[i],'width'),getStyle(xDiv2[i],'height'),getStyle(xDiv2[i],'zIndex')]);
    }
    for (var i = 0; i < xDiv3.length; i++) {
        arr.push([getStyle(xDiv3[i],'left'),getStyle(xDiv3[i],'top'),getStyle(xDiv3[i],'width'),getStyle(xDiv3[i],'height'),getStyle(xDiv3[i],'zIndex')]);
    }
    preved.onclick = function(){    //点击左箭头时，left,top,width,height,z-index值电话
        arr.push(arr[0]);
        arr.shift();
        for (var i = 0; i < xDiv1.length; i++) {
            xDiv1[i].style.left = arr[1][0];
            xDiv1[i].style.top = arr[1][1];
            xDiv1[i].style.width = arr[1][2];
            xDiv1[i].style.height = arr[1][3];
            xDiv1[i].style.zIndex = arr[1][4];
        }
        for (var i = 0; i < xDiv2.length; i++) {
            xDiv2[i].style.left = arr[2][0];
            xDiv2[i].style.top = arr[2][1];
            xDiv2[i].style.width = arr[2][2];
            xDiv2[i].style.height = arr[2][3];
            xDiv2[i].style.zIndex = arr[2][4];
        }
        for (var i = 0; i < xDiv3.length; i++) {
            xDiv3[i].style.left = arr[0][0];
            xDiv3[i].style.top = arr[0][1];
            xDiv3[i].style.width = arr[0][2];
            xDiv3[i].style.height = arr[0][3];
            xDiv3[i].style.zIndex = arr[0][4];
        }   
    };
    nexted.onclick = function(){
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        for (var i = 0; i < xDiv1.length; i++) {
            xDiv1[i].style.left = arr[1][0];
            xDiv1[i].style.top = arr[1][1];
            xDiv1[i].style.width = arr[1][2];
            xDiv1[i].style.height = arr[1][3];
            xDiv1[i].style.zIndex = arr[1][4];
        }
        for (var i = 0; i < xDiv2.length; i++) {
            xDiv2[i].style.left = arr[2][0];
            xDiv2[i].style.top = arr[2][1];
            xDiv2[i].style.width = arr[2][2];
            xDiv2[i].style.height = arr[2][3];
            xDiv2[i].style.zIndex = arr[2][4];
        }
        for (var i = 0; i < xDiv3.length; i++) {
            xDiv3[i].style.left = arr[0][0];
            xDiv3[i].style.top = arr[0][1];
            xDiv3[i].style.width = arr[0][2];
            xDiv3[i].style.height = arr[0][3];
            xDiv3[i].style.zIndex = arr[0][4];
        }   
    };
    function getStyle(obj,attr) {           //获取样式
        if (obj.currentStyle) {             //兼容ie
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj,false)[attr];
        }
    }
}