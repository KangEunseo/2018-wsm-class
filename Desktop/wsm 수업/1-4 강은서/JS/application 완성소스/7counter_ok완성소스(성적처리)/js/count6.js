var countDown=new Date("DEC 31, 2018 23:59:59").getTime();
    var x= setInterval(function(){
        var now=new Date().getTime();
        var distance=countDown-now;
        var days=Math.floor(distance/(1000*60*60*24));
        var hours=Math.floor((distance %(1000*60*60*24))/ (1000*60*60));
        var minutes = Math.floor((distance %(1000*60*60))/ (1000*60));
        var seconds = Math.floor((distance %(1000*60))/ 1000);
        document.getElementById("count").innerHTML = "<font color=#ffffff size=7 >"+days+"</font>Days&nbsp;<font color=#ffffff size=7>"+hours+"</font>Hours&nbsp;<font color=#ffffff size=7 >"+minutes+"</font>Minutes&nbsp;<font color=#ffffff size=7 >"+seconds+"</font>Seconds";
            if(distance<0){
                clearInterval(x);
                document.getElementById("count").innerHTML="카운트 다운 종료"
            } 
},1000);