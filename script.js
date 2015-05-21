(function walkingMan(){
var div = document.getElementById('div');
var img = document.getElementById('img');
div.style.width ="1000px";
img.style.left = "0px";
img.style.position = "relative";


function walkRight(){
   if(img.style.left === div.style.width){
     img.className = 'flip';
     walkLeft();
     return;
   }
  img.style.left = parseInt(img.style.left) + 1 + 'px';
  var animate = setTimeout(walkRight, 8);
};
walkRight();

function walkLeft(){
  if(img.style.left === '0px'){
    img.className = '';
    walkRight();
    return;
  }
  img.style.left = parseInt(img.style.left) - 1 + 'px';
  var animate = setTimeout(walkLeft, 8);
 }
})();


