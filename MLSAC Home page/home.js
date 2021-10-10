let about = document.getElementsByClassName("about-us")[0]
let events = document.getElementsByClassName('upcoming-events')[0]
let abc = document.getElementsByClassName('About')[0]

let animationPopup1 = () => {
 about.style.bottom = "50vh";
}

let animationPopup2 = () => {
    events.style.bottom = "50vh";
    events.style.right = "0vw";
}

function leave1(){
    about.style.bottom = "-50vh";
}

function leave2(){
    events.style.bottom = "-50vh";
}
