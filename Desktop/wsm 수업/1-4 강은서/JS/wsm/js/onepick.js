function slide() {
  var myimages = new Array();
  myimages[0] = "image/pick/1.jpg";
  myimages[1] = "image/pick/2.jpg";
  myimages[2] = "image/pick/3.jpg";
  myimages[3] = "image/pick/4.jpg";
  myimages[4] = "image/pick/5.jpg";
  myimages[5] = "image/pick/6.jpg";
  myimages[6] = "image/pick/7.jpg";
  myimages[7] = "image/pick/8.jpg";
  myimages[8] = "image/pick/9.jpg";
  myimages[9] = "image/pick/10.jpg";
  myimages[10] = "image/pick/11.jpg";

  var ry = Math.floor( Math.random() * (myimages.length-1) );
  document.write('<link rel="stylesheet" type="text/css" href="css/onepick.css">');
  document.write('<img src="image/home1.png" id="home" onclick=main()>');
  document.write("<center><p><font id='f'>Today's Guhoon</font></p>");
  document.write('<img src="' + myimages[ry] + '" id="pic" width="400px" height="auto"></center>');
}