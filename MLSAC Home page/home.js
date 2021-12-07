let Loadvideo = document.getElementById("loadVideo");

if(window.matchMedia("(max-width:450px)").matches){
    Loadvideo.src="MLSAC Home page/images/phonebg.mp4";
    
    Loadvideo.addEventListener("ended", function(){
        window.location="aboutus.html"
    })
}

/* setTimeout(function(){
    Loadvideo.style.animation="blurme 1.3s 1"
}, 6500); */
