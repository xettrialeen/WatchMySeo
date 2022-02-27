let menuBtn = document.querySelectorAll(".menuBtn");
menuBtn.forEach((e) => {
  e.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// popup donate
let tabThreeBlur = document.querySelector(".ttw-body");
let popupDonate = document.querySelector(".donation-link");
let donateButton = document.querySelectorAll(".donateNP");
let donateCloseButton = document.querySelector(".dlClosepopup");
donateButton.forEach((e) => {
  e.addEventListener("click", () => {
    popupDonate.style = `
   opacity:100%;
   visibility:visible;
   transition: all 0.3s ease-in-out;
   
   `;
    tabThreeBlur.style = `
   filter: blur(8px);`;
  });
});
donateCloseButton.addEventListener("click", () => {
  popupDonate.style = `
  opacity:0%;
  visibility:hidden;
  
  `;
  tabThreeBlur.style = `
  filter: blur(0px);`;
});

let cards = document.querySelectorAll(".card");
let skeleton = document.querySelectorAll(".skeleton");
cards.forEach((e) => {
  e.style.background = "transparent";
});
setTimeout(() => {
  skeleton.forEach((element) => {
    let style = element.style;
    style.setProperty("--display", "none");
  });
  cards[0].style.background = `linear-gradient(159.17deg, #2B2B2B 2.63%, rgba(10, 10, 9, 0) 94.07%)`;
  cards[1].style.background = `linear-gradient(159.17deg, #2B2B2B 2.63%, rgba(10, 10, 9, 0) 94.07%)`;
  cards[2].style.background = `linear-gradient(159.17deg, #2B2B2B 2.63%, rgba(10, 10, 9, 0) 94.07%)`;
  cards[3].style.background = `linear-gradient(159.17deg, #2B2B2B 2.63%, rgba(10, 10, 9, 0) 94.07%)`;
}, 2000);

function initTab(elem) {
  document.addEventListener("click", function (e) {
    if (!e.target.matches(elem + " .menuBtn")) return;
    else {
      if (!e.target.classList.contains("active")) {
        findActiveElementAndRemoveIt(elem + " .menuBtn");
        findActiveElementAndRemoveIt(elem + " .tab-panel");
        e.target.classList.add("active");
        setTimeout(function () {
          var panel = document.querySelectorAll(
            elem + " .tab-panel." + e.target.dataset.name
          );
          Array.prototype.forEach.call(panel, function (el) {
            el.classList.add("active");
          });
        }, 200);
      }
    }
  });
}

function findActiveElementAndRemoveIt(elem) {
  var elementList = document.querySelectorAll(elem);
  Array.prototype.forEach.call(elementList, function (e) {
    e.classList.remove("active");
  });
}

initTab("body");

let tabTwo = document.querySelectorAll(" .menuBtn ");
let popupStats = document.querySelector(".stats-popup");
tabTwo.forEach((e) => {
  e.addEventListener("click", (j) => {
    if (j.target.classList[0] === "menuBtn2") {
      popupStats.style = `
  opacity: 1;
 visibility:visible;
 transition:  all 0.3s ease-in-out;
  `;
    } else {
      popupStats.style = `
  opacity: 0;
  visibility: hidden;
  `;
    }
  });
});

let statsButton = document.querySelector(".statsButton");
let statQueryData= document.querySelector(".spw-title h3");
let statQueryDescription= document.querySelector(".spw-title p")
let statsPopup= document.querySelector(".stats-popup");
let localNames = [];
let value = 0;

statsButton.addEventListener("click", () => {
  statsPopup.style=`visibility:hidden; opacity:0;`;
  value++;
  
  if (value < 6) {
    statQueryData.innerHTML=`You’ve ${5-value} Queries remaining`;
  if (value == 5) {
    statQueryData.style=`text-align:center;`
    statQueryData.innerHTML=`Timer Has Started`;
  
    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
          statsButton.disabled = true;
  
          if (--timer < 0) {
              // timer = duration;
              timer=0;
              if (timer===0) {
                value=0;
                statQueryData.style=`text-align:left;`
                statQueryData.innerHTML=`You’ve ${5-value} Queries remaining`;
               
                statQueryDescription.style=`text-align:left;margin-top:12px; font-size:16px; font-weight:normal;`;
                statQueryDescription.innerHTML=`Hello everyone.I’ve used similarwebapi, which limits daily api requests. That's why I’ve limited a bit. After the end of five queries, you just have to wait for 3 minutes to use it 💌. Thankyou! for choosing us.`;
                statsButton.disabled =false;
             
              }

          }
      }, 1000);
  }
  var threeMinutes = 60 * 0.2;
  statQueryDescription.style=`text-align:center;margin-top:50px; font-size:34px; font-weight:bold;`;
startTimer(threeMinutes, statQueryDescription);
  }
    // let stateChange = "";
    let oldData = localStorage.getItem("localName");
    if (oldData==="changeState") {
      console.log(oldData);
      return;
      
    }
    localStorage.setItem("localName", "do");
   
    let data = oldData;
   
    if (value === 5) {
      // localStorage.clear();
      
      stateChange = "changeState";
      localStorage.setItem("localName", stateChange);
      // oldData = localStorage.getItem("localName");
      // data = oldData;
      console.log(data);
    }
    console.log(data);
  
    // let newData=JSON.stringify();

    // // value++;
    // let oldData = localStorage.getItem("localNames");
    // let arr =JSON.parse(oldData)
    // arr.push(value++);
    // // arr=[ value++];

    // if (arr.length <=5 ) {
    //   arr=[];
    // value=0;

    // }
    // arr.push(value+=1);
    // console.log(arr);
    // let newData = JSON.stringify(arr);
    // localStorage.setItem("localNames", newData);
  }

  // localStorage.clear();
});





