function main(){
  window.location.assign("http://jbogry7.dothome.co.kr/index.html")
}

var timerID = null

function showtime(){
  var now = new Date();
  var hours =  now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeValue = "" + ((hours > 12) ? "오후 " : "오전 ");
  timeValue += (hours > 12) ? hours - 12 : hours;
  timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
  timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
  clock.face.value = timeValue
  timerID = setTimeout("showtime()" , 1000)
}

function stopclock(){
  clearTimeout(timerID)  
}