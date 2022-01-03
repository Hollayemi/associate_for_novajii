// hometoggle

function toggleHome(e,c) {
    var id      = e.id;
    var pxss      = c+"px";
    var myClass = "."+id + "-ul"
    var myClassFa = "."+id + "-fa"

    var elem    = document.querySelector(myClass)
    var elemFa    = document.querySelector(myClassFa)

    
    if(elem.style.height == "0px"){
        elem.style.height       = pxss
        elem.style.overflow     = "hidden"
        elem.style.visibility   = "visible"
        elemFa.style.transform  = "scale(-1)"
        elemFa.style.padding    = "10px"
        elemFa.style.opacity    = "1"
    }else{
        elem.style.height       = "0px"
        elem.style.overflow     = "hidden"
        elem.style.visibility   = "hidden"
    }
}

    var allMyUl  =  document.getElementsByClassName("myUl");
    window.addEventListener('mouseup', function(event){
        if(event.target != document.querySelector('.myUl') && event.target.parentNode != document.querySelector('.myUl')){
            for(var i = 0; i < allMyUl.length; i++){
                allMyUl[i].style.visibility =   "hidden";
                allMyUl[i].style.height     =   "0px";
            }
        }
    })



//   $(".myUl").mouseleave(function(){
//     $(".myUl").css("height", "0px");
//     $(".myUl").css("visibility", "hidden");
//   });

  function toggle(element){
    var id = element.id + "-p"
    var chooseClass = "."+element.id + "-s"
    console.log(id);
    if(document.getElementById(id).style.height != "auto"){
        document.getElementById(id).style.height="auto"
        document.getElementById(id).style.paddingTop="20px"
        document.getElementById(id).style.paddingBottom="0px"
        document.querySelector(chooseClass).style.transform = "scale(-1)"
    }else{
        document.getElementById(id).style.height="0px"
        document.getElementById(id).style.paddingTop="0px"
        document.querySelector(chooseClass).style.transform = "scale(1)"
    }
}




// 


var side = document.querySelector('.ul1')
document.querySelector('.barsIon').addEventListener('click', function(){
        side.style.top="0%"
        document.querySelector('.barsIcon').style.transform = "scale(0)"
        document.querySelector('.removeIcon').style.transform = "scale(1.1)"
    })

document.querySelector('.removeIcon').addEventListener('click', function(){
        side.style.top="-100%"

        document.querySelector('.barsIcon').style.transform = "scale(1.1)"
        document.querySelector('.removeIcon').style.transform = "scale(0)"
    
})








// 

setInterval(function(){ 
    plusSlides(1)
}, 5000);

// slider


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}