
 const buttonRight = document.getElementById('right');
 const buttonLeft = document.getElementById('left');

 buttonRight.onclick = function () {
   document.getElementById('carousel').scrollBy({
    
    left: 300,
    behavior: 'smooth'
  });
  
 };
 buttonLeft.onclick = function () {
   document.getElementById('carousel').scrollBy({
       left : -300,
       behavior: "smooth"
   });
   
 };