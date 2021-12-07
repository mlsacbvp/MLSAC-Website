function slider(){

  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 1;
  showSlides(slideIndex);


  // function to change slides number getting displayed

  function plusSlides(n){
    slideIndex += n;
  
    // setting lower limit 
    if (slideIndex < 1){
      slideIndex = slides.length - 2;
    }
  
    // setting upper limit
    else if (slideIndex >= (slides.length - 1) ){
      slideIndex = 1;
    }
    showSlides(slideIndex);
  }
  
  //function to display required slides

  function showSlides(pos) {
    // media query to show required no. of slides
    let screenSize = window.matchMedia("(max-width: 450px)");
    let i;
    for (i = 0; i < slides.length; i++) {
        // makes all the slides disappear
        slides[i].style.display = "none";
        
    }

    // makes the required slides reappear
    slides[pos-1].style.display = "block";
    slides[pos].style.display = "block";

    // shows 3 slides only when it is not the phone webpage
    if (!screenSize.matches){
      slides[pos+1].style.display = "block"; 
    }

  }

  // adding click action to both the anchor tags

  document.getElementById("prev").addEventListener("click",() => plusSlides(-1) );
  document.getElementById("next").addEventListener("click",() => plusSlides(1) );
  
}

slider();
