var pastEvents = [
  {
    Poster: "events/assets/events/MLSAC-UTSAV.jfif",
    Name: "MLSAC-UTSAV",
    Desc: "Happiness can be found even in the darkest of times, when one only remembers to turn on the light. MLSAC UTSAV was all about spreading joy through various fun filled games with exciting prizes for the top scorers"
  },
  {
    Poster: "events/assets/events/Web_D_Verse.png",
    Name: "Web-D-Verse",
    Desc: "A 2-day event organised by MLSAC-BVP, in the celebration of our second anniversary. Through this event, participants were able to experience a corporate environment, deal with clients and make specially curated websites for them."
  },
  {
    Poster: "events/assets/events/evotech.jpeg",
    Name: "Evotech 5.0",
    Desc: "The Department of Computer Science and Engineering at BVCOE in collaboration with MLSAC-BVP brings you Evotech 5.0! Showcase your ideas, get judged by our team of experts and win some exciting prizes."
  }, {
    Poster: "events/assets/events/express.jpeg",
    Name: "Express",
    Desc: "Mental health is not a destination, it's a journey. QAAFILA X MLSAC-BVP presents EXPRESS - ‘Your mind on the Mic’. Share your personal experiences through poetries & stories that could help a rower of the same boat or step into someone else's ship of emotions."
  },
  {
    Poster: "events/assets/events/buildify.jpg",
    Name: "Buildify",
    Desc: "MLSAC-BVP is back with an erudite webinar  Buildify. Join us and learn how to present yourself on professional platforms and build a strong and pleasing profile!"
  }, {
    Poster: "events/assets/events/btc.jpeg",
    Name: "Beyond The Curriculum",
    Desc: "Microsoft Learn Student Ambassadors Chapter is back with a webinar Beyond The Curriculum and will talk on how to not waste 4 years of college getting just a degree."
  }, {
    Poster: "events/assets/events/python'scool.jpeg",
    Name: "Python S'Cool",
    Desc: "Microsoft Learn Student Ambassadors' Chapter is back with a 3-week coding bootcamp on Python, Python S'Cool."
  }, {
    Poster: "events/assets/events/nexus.jpeg",
    Name: "Nexus 2.0",
    Desc: "Nexus 2.0 was an event of MLSAC to welcome the incoming freshers. We organized 5 fun events, which received positive responses from everyone. They were Family Feud, Murder Mystery Chase The Killer, Harry Potter Quiz, and Logo Quiz."
  }, {
    Poster: "events/assets/events/design sprint.jpeg",
    Name: "Beat The Base Returns",
    Desc: "A Machine learning based model accuracy predictor. Participants were given a set of data and a base model to start with. The aim was to improve the accuracy of the existing model."
  }, {
    Poster: "events/assets/events/beatthebase.jpeg",
    Name: "Design Sprint",
    Desc: "A Front End web development Competition where participants were tasked with creating a website and deploying it. The catch was they could only use the assets provided to them."
  }, {
    Poster: "events/assets/events/mlsc hackotber poster.png",
    Name: "Hacktoberfest 2021",
    Desc: "A Month long celebrations to spread awareness about open source contribution and holding webinars on the basics of Git and Github."
  }, {
    Poster: "events/assets/events/Emojify.jpeg",
    Name: "Emojify",
    Desc: "An Emoji Designing Competition giving a platform to the participants to express their emotions in a way which has never been done before."
  }, {
    Poster: "events/assets/events/Sharks's Capital.jpeg",
    Name: "Shark's Capital",
    Desc: "Shark's Capital was a business pitching Competition, wherein participants where assigned a company and their goal was to pitch that company to the sharks and bag a funding for themselves."
  }, {
    Poster: "events/assets/events/AZURE-PYDAY.png",
    Name: "Azure Pyday",
    Desc: "An Interactive Session of Microsoft's Azure was organised wherein particpants were made aware of the capabilities of Azure and given some free Azure Credits to get them Started."
  }, {
    Poster: "events/assets/events/Access-a-thon.png",
    Name: "Acces-A-Thon",
    Desc: "Under BVP-MLSAC Flagship event Effigo, an ideathon was organised to give the budding idealists a stage to showcase their vision, forging dreams into realities."
  }, {
    Poster: "events/assets/events/machine-learning.jpg",
    Name: "ML Bootcamp",
    Desc: "to get the locked-down freshers started with their journey, a bootcamp on Machine Learning was organised to get them started with the field. various hands on projects were discussed to establish a better grip on the topic."
  }, {
    Poster: "events/assets/events/python-monday.jpg",
    Name: "Python Mondays",
    Desc: "A weekly sesssion on Python basics to guide the new ones about the ever growing language - Python."
  }
]

htmlCode = ``;
pastEvents.forEach(function (pastEvent) {
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

var mainEvent = [
  { // fallback event
    Poster: "events/assets/events/fallback.jpeg", // Add A fallbak image
    Name: "Join Us",
    Desc: `Hey, many great events are planned for you. Stay tuned to get to know about such opportunities in the future.`,
    dateComEvent: `2022-01-01`, //yyyy-mm-dd,
    link: `#`
  },
  { // upcoming event
    Poster: "events/assets/events/join-core-1.jpeg",
    Name: "Join Us",
    Desc: `We, at Microsoft Learn Student Ambassadors' Chapter has conducted events in various domains;
    ranging from Open-Source, ML, Business Pitching, DevOps, Web Dev to a lot of fun events. Join our group to stay updated with more such opportunities`,
    dateComEvent: `2022-12-10`,
    link: `https://chat.whatsapp.com/BLcwUfH7Gwv4MXf9GjpKk6r`
  }
];

var upcomingEventHtmlCode = ``;

// function for checking if the event is expired or not
var checkEventDatefreshness = (eventDate) => { // please add date in yyyy-mm-dd formate
  var TodayDate = new Date().getTime();
  var eveDate = new Date(eventDate).getTime();

  if (eveDate <= TodayDate) {
    return 0;
  }

  else {
    return 1;
  }
}

// checking if the event is expired or not
var CommEventToggle = checkEventDatefreshness(mainEvent[1].dateComEvent); // 1 for fresh && 0 for Stale community event

upcomingEventHtmlCode += ` 
  <div class="poster">
    <img src="${mainEvent[CommEventToggle].Poster}" alt="join team poster" class="event-poster" />
  </div>

  <div class="event-info">
    <div class="event-name">
      <h2>
        ${mainEvent[CommEventToggle].Name}
      </h2>
    </div>
    
    <div class="event-details">
      <pre>${mainEvent[CommEventToggle].Desc}</pre>
    </div>
  </div>
`

document.getElementById("event-desc").innerHTML = upcomingEventHtmlCode;

// Check if communty event is stale and change registration button to Text
if (!CommEventToggle) { // for Registration button to go stale if event is done
  Html = `  <button class="register" disabled>
  <a ${!CommEventToggle ? `` : `href=${mainEvent[CommEventToggle].link}`} target="_blank" class="register-btn_text">
  COMING SOON
  </a>
  <!-- once registrations starts, this button will be updated with the registration link -->
</button>`
  document.getElementById("EventRegButton").innerHTML = Html
};

function slider() {

  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 1;
  showSlides(slideIndex);


  // function to change slides number getting displayed

  function plusSlides(n) {
    slideIndex += n;

    // setting lower limit 
    if (slideIndex < 1) {
      slideIndex = slides.length - 2;
    }

    // setting upper limit
    else if (slideIndex >= (slides.length - 1)) {
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
    slides[pos - 1].style.display = "block";
    slides[pos].style.display = "block";

    // shows 3 slides only when it is not the phone webpage
    if (!screenSize.matches) {
      slides[pos + 1].style.display = "block";
    }

  }

  // adding click action to both the anchor tags

  document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
  document.getElementById("next").addEventListener("click", () => plusSlides(1));

}

function slider2() {
  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 0;
  showSlides(slideIndex);


  // function to change slides number getting displayed

  function plusSlides(n) {
    slideIndex += n;

    // setting lower limit 
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    // setting upper limit
    else if (slideIndex >= (slides.length - 1)) {
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

  document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
  document.getElementById("next").addEventListener("click", () => plusSlides(1));

}

//trial media query to display 1 card in mobile view
let screenSize = window.matchMedia("(max-width: 450px)");
if (screenSize.matches) {
  slider2();
}

else {
  slider();
}




