

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex<1)
  {
     slideIndex=1
     showSlides(slideIndex);
  }
  if( slideIndex>4)
  {
    slideIndex=4
    showSlides(slideIndex);
  }

  showSlides(slideIndex);
}
var slideIndex = 1 ;
showSlides(slideIndex);

function showSlides(pos) {
  var i;
  var slides = document.getElementsByClassName("past-card");
  

  for (i = 0; i <= slides.length; i++) {
      
      slides[pos-1].style.display = "block";
      slides[i].style.display = "none";
      slides[pos].style.display = "block";
      slides[pos+1].style.display = "block";

  }

  
  
}