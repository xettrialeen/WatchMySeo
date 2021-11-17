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
