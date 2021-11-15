let Loadvideo = document.getElementById("loadVideo");

if(window.matchMedia("(max-width:450px)").matches){
    Loadvideo.src="MLSAC Home page/images/phonebg.mp4"
}

setTimeout(function(){
    Loadvideo.style.animation="blurme 4s 1"
}, 7900);

Loadvideo.addEventListener("ended", function(){
    // video disappears
    // Loadvideo.style.opacity = "0";

    // bg of video disappears
    // document.getElementsByClassName("loading")[0].style.display = "none";
    // headings gets blurred
    document.getElementsByClassName("name")[0].style.animation = "blurme 3s 1";
    document.getElementsByClassName("logo")[0].style.animation = "blurme 3s 1";
})