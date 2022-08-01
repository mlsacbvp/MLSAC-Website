let Loadvideo = document.getElementById("loadVideo");
let LoadText = document.getElementById("logo-text");

if (window.matchMedia("(max-width:500px)").matches) {
    // Loadvideo.src = "MLSAC Home page/images/phonebg.mp4";

    // Loadvideo.addEventListener("ended", function () {
    //     window.location = "aboutus.html"
    // })


    LoadText.addEventListener("transitionend", function () {
        setTimeout(() => {
            window.location = "aboutus.html";
        }, 500);
    })
}

/* setTimeout(function(){
    Loadvideo.style.animation="blurme 1.3s 1"
}, 6500); */
