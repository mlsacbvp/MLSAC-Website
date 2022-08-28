var pastEvents = [
  {
    Poster:"events/assets/evotech.jpeg",
    Name:"Evotech 5.0",
    Desc:"The Department of Computer Science and Engineering at BVCOE in collaboration with MLSAC-BVP brings you Evotech 5.0! Showcase your ideas, get judged by our team of experts and win some exciting prizes."
  },{
    Poster:"events/assets/events/express.jpeg",
    Name:"Express",
    Desc:"Mental health is not a destination, it's a journey.QAAFILA X MLSAC-BVP presents EXPRESS - ‘Your mind on the Mic’. Share your personal experiences through poetries & stories that could help a rower of the same boat or step into someone else's ship of emotions."
  },
  {
    Poster:"events/assets/buildify.jpg",
    Name:"Buildify",
    Desc:"MLSAC-BVP is back with an erudite webinar  Buildify. Join us and learn how to present yourself on professional platforms and build a strong and pleasing profile!"
  }, {
    Poster:"events/assets/events/btc.jpeg",
    Name:"Beyond The Curriculum",
    Desc:"Microsoft Learn Student Ambassadors Chapter is back with a webinar Beyond The Curriculum and will talk on how to not waste 4 years of college getting just a degree."
  }, {
    Poster:"events/assets/python'scool.jpeg",
    Name:"Python S'Cool",
    Desc:"Microsoft Learn Student Ambassadors' Chapter is back with a 3-week coding bootcamp on Python, Python S'Cool."
  }, {
    Poster:"events/assets/events/nexus.jpeg",
    Name:"Nexus 2.0",
    Desc:"Nexus 2.0 was an event of MLSAC to welcome the incoming freshers. We organized 5 fun events, which received positive responses from everyone. They were Family Feud, Murder Mystery Chase The Killer, Harry Potter Quiz, and Logo Quiz."
  }, {
    Poster:"events/assets/events/design sprint.jpeg",
    Name:"Beat The Base Returns",
    Desc:"A Machine learning based model accuracy predictor. Participants were given a set of data and a base model to start with. The aim was to improve the accuracy of the existing model."
  }, {
    Poster:"events/assets/events/beatthebase.jpeg",
    Name:"Design Sprint",
    Desc:"A Front End web development Competition where participants were tasked with creating a website and deploying it. The catch was they could only use the assets provided to them."
  }, {
    Poster:"events/assets/events/mlsc hackotber poster.png",
    Name:"Hacktoberfest 2021",
    Desc:"A Month long celebrations to spread awareness about open source contribution and holding webinars on the basics of Git and Github."
  }, {
    Poster:"events/assets/events/Emojify.jpeg",
    Name:"Emojify",
    Desc:"An Emoji Designing Competition giving a platform to the participants to express their emotions in a way which has never been done before."
  }, {
    Poster:"events/assets/events/Sharks's Capital.jpeg",
    Name:"Shark's Capital",
    Desc:"Shark's Capital was a business pitching Competition, wherein participants where assigned a company and their goal was to pitch that company to the sharks and bag a funding for themselves."
  }, {
    Poster:"events/assets/events/AZURE-PYDAY.png",
    Name:"Azure Pyday",
    Desc:"An Interactive Session of Microsoft's Azure was organised wherein particpants were made aware of the capabilities of Azure and given some free Azure Credits to get them Started."
  }, {
    Poster:"events/assets/events/Access-a-thon.png",
    Name:"Acces-A-Thon",
    Desc:"Under BVP-MLSAC Flagship event Effigo, an ideathon was organised to give the budding idealists a stage to showcase their vision, forging dreams into realities."
  }, {
    Poster:"events/assets/events/machine-learning.jpg",
    Name:"ML Bootcamp",
    Desc:"to get the locked-down freshers started with their journey, a bootcamp on Machine Learning was organised to get them started with the field. various hands on projects were discussed to establish a better grip on the topic."
  }, {
    Poster:"events/assets/events/python-monday.jpg",
    Name:"Python Mondays",
    Desc:"A weekly sesssion on Python basics to guide the new ones about the ever growing language - Python."
  }
]

var mainEvent = [
  { // fallback event for coming soon
    Poster: "events/assets/Webdverse.jpeg", // Add A fallbak image
    Name: "Coming soon",
    Desc: `
    Hello there , We are coming soon
    `
  }, { // the actual event ot Fresh event
    Poster: "events/assets/Webdverse.jpeg",
    Name: "WEB- D - VERSE",
    Desc: `
    In celebration of its 2nd anniversary, MLSAC-BVP is back with something exciting in store for you all!
We're weaving a web full of thrill and exposure. Surely you will get a different taste of WEB.
REGISTER NOW...!!`
  }
];



htmlCode = ``;

pastEvents.forEach(function(pastEvent){
    htmlCode = htmlCode + `
    <div class="past-card">
      <div class="past-event-poster">
        <div class="past-event-poster">
          <img src="${pastEvent.Poster}"  class="past-photo" alt="Event Poster">
          <h3 class="past-title">${pastEvent.Name}</h3>
          <figcaption>${pastEvent.Desc}</figcaption>
        </div>
      </div>
    </div> `;
});

document.getElementById("past-events-details").innerHTML = htmlCode;

// for the Upcoming event automation 
var upcomeEventHtmlCode = ``;
upcomeEventHtmlCode += ` 
  <div class="poster">
        <img src="${mainEvent[0].Poster}" alt="join team poster" class="event-poster" />
      </div>

      <div class="event-info">
        <div class="event-name">
          <h2>
            ${mainEvent[0].Name}
          </h2>
        </div>
        <div class="event-details">
          <pre>${mainEvent[0].Desc}</pre>
        </div>
  </div>
`

document.getElementById("event-desc").innerHTML = upcomeEventHtmlCode;

// Check if communty event is stale and change registration button to Text
var boolStaleComEvent = true; //change to false if fresh event

if (boolStaleComEvent) { // for Registration button to go stale if event is done
  Html = `<pre><h2>Coming SOON ...</h2></pre>`
  document.getElementById("EventRegButton").innerHTML = Html
};


function slider() {

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

function slider2(){
  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 0;
  showSlides(slideIndex);


  // function to change slides number getting displayed

  function plusSlides(n){
    slideIndex += n;
  
    // setting lower limit 
    if (slideIndex < 0){
      slideIndex = slides.length - 1;
    }
  
    // setting upper limit
    else if (slideIndex >= (slides.length - 1) ){
      slideIndex = 0;
    }
    showSlides(slideIndex);
  }
  
  //function to display required slides

  function showSlides(pos) {
    let i;
    for (i = 0; i < slides.length; i++) {
        // makes all the slides disappear
        slides[i].style.display = "none";
    }

    // makes the required slides reappear
    slides[pos].style.display = "block";
  }

  // adding click action to both the anchor tags

  document.getElementById("prev").addEventListener("click",() => plusSlides(-1) );
  document.getElementById("next").addEventListener("click",() => plusSlides(1) );
  
}

//trial media query to display 1 card in mobile view
let screenSize = window.matchMedia("(max-width: 450px)");
if (screenSize.matches){
  slider2();
}

else{
  slider();
}




