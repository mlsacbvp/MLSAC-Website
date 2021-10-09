let about = document.getElementsByClassName("about-us")[0]
let events = document.getElementsByClassName('upcoming-events')[0]
let abc = document.getElementsByClassName('About')[0]

let animationPopup1 = () => {
 about.style.bottom = "7rem";
}

let animationPopup2 = () => {
    events.style.bottom = "7rem";
    events.style.right = "0rem";
}

function leave1(){
    about.style.bottom = "-38rem";
}

function leave2(){
    events.style.bottom = "-38rem";
}





//  export default function valuation(){
//      let bottomValue;
     
//      if(){
//         bottomValue = 10 
//      }
//  }


// about.addEventListener("click", () => {
//     about.style.cssText = 'bottom:10rem'
//   console.log("hello")
// });

// function animation(){
//     console.log("Function is working")
// }

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// div {
//   width: 150px;
//   height: 100px;
//   border: 1px solid black;
//   margin: 10px;
//   float: left;
//   padding: 30px;
//   text-align: center;
//   background-color: lightgray;
// }
// h3 {
//   background-color: white;
// }
// </style>
// {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
// <script>
// var x = 0;
// var y = 0;
// var z = 0;
// $(document).ready(function(){
//   $("div.over").mouseover(function(){
//     $(".over span").text(x += 1);
//   });
//   $("div.enter").mouseenter(function(){
//     $(".enter span").text(y += 1);
//   });
//   $("div.move").mousemove(function(){
//     $(".move span").text(z += 1);
//   });
// });
// </script>
// </head>
// <body>

// <h3>This example demonstrates the difference between mousemove, mouseenter and mouseover.</h3>

// <p>The mouseover event triggers when the mouse pointer enters the div element, and its child elements.</p>
// <p>The mouseenter event is only triggered when the mouse pointer enters the div element. </p>
// <p>The onmousemove event triggers every time the mouse pointer is moved over the div element.</p>

// <div class="over">
//   <h3>Mouseover event triggered: <span></span></h3>
// </div>

// <div class="enter">
//   <h3>Mouseenter event triggered: <span></span></h3>
// </div>

// <div class="move">
//   <h3>Mousemove event triggered: <span></span></h3>
// </div>

// </body>
// </html>
