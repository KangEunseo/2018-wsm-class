function play(){
  var myAudio=document.getElementById("mp3");
  myAudio.play();
}

function pause(){
  var myAudio=document.getElementById("mp3");
  myAudio.pause();
}

function reset(){
  var myAudio=document.getElementById("mp3");
  myAudio.currentTime=0;
}