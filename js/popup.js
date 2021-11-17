/* _                                                                                                            
 _____         _    _  _                              _                     _                             _ 
| __  | _ _  _| | _| || |_  ___    _ _ _  ___  ___   | |_  ___  ___  ___   |_| ___    ___  ___  ___  ___ | |
| __ -|| | || . || . ||   || .'|  | | | || .'||_ -|  | . || . ||  _||   |  | ||   |  |   || -_|| . || .'|| |
|_____||___||___||___||_|_||__,|  |_____||__,||___|  |___||___||_|  |_|_|  |_||_|_|  |_|_||___||  _||__,||_|
                                                                                               |_|          

    */

chrome.tabs.executeScript(null, {
  file: "./content.js",
});

let ram;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.tabs.query(
    {
      active: true,
      lastFocusedWindow: true,
    },
    function (tabs) {
      sendResponse({});

      // ?? updating chrome extension data with website data dynamically-------------------------
      // -----------------------------------------------------------
      // -----------------------------------------------------------

      // todo working on pageDescription and title
  

      // ** this is page title for chrome extension
      let pageTitle = document.querySelector(".meta-title");
      let pageData = request.pageTitle;
      pageTitle.innerText = pageData;

      let pageCount = pageTitle.innerText.length;
      let pageCharacter = document.querySelector(".page-character");
      pageCharacter.innerText = `${pageCount} Characters`;

      // ** this is page description for chrome extension
      let pageDescription = document.querySelector(".description-content");
      pageDescription.innerText = request.metaTag;

      let descCount = pageDescription.textContent.split(" ").join("").length;
      let descCharacter = document.querySelector(".desc-character");
      descCharacter.innerText = `${descCount} Characters`;

      // ** this is total words count for chrome extension
      let totalWords = document.querySelector(".total-words");
      totalWords.innerText = `${request.totalWords} `;

      // todo working on MetaLinks
      // ** this will dynamically change meta links

      let metaLinkD, metaLinkP, metaLinkF, metaLinkT;

      function docQuires(className) {
        return document.querySelector(`${className}`);
      }

      metaLinkD = docQuires(".cardD");
      if (pageDescription) {
        metaLinkD.innerText = "Yes";
      } else {
        metaLinkD.innerText = "NO";
      }

      metaLinkP = docQuires(".cardP");
      if (pageTitle) {
        metaLinkP.innerText = "Yes";
      } else {
        metaLinkP.innerText = "NO";
      }

      metaLinkF = docQuires(".cardF");
      let fbOG = request.fbOg;
      if (fbOG) {
        metaLinkF.innerText = "yes";
      } else {
        metaLinkF.innerText = "NO";
      }
      metaLinkT = docQuires(".cardT");
      let twOG = request.twOg;
      if (twOG) {
        metaLinkT.innerText = "yes";
      } else {
        metaLinkT.innerText = "NO";
      }

      // todo working for headings
      let headO, headT, headTh, headF;
      headO = document.querySelector(".head-one");
      if (request.headingOne === 1) {
        headO.innerText = `Used for a ${request.headingOne} time `;
      } else if (request.headingOne >= 2) {
        headO.innerText = `Used for ${request.headingOne} times `;
      }

      //todo this is for popup headings
      let popUpBox,
        headingOne,
        headOnePopup,
        closeBtn,
        cardStyle,
        headingOneData,
        headingTwo,
        headingTwoData,
        headTwoPopup,
        headingThree,
        headingThreeData,
        headThreePopup;;
        
      headingOne = document.querySelector(".headingOne");
     
      headOnePopup = document.querySelector(".headOneData");
      closeBtn = document.querySelectorAll(".closeBtn");
      popUpBox = document.querySelectorAll(".popupBox ");
      headingOneData = request.headingOneData;

      
      let headOneLoop = document.querySelector(".headOneLoop");

      for (let i = 0; i < headingOneData.length; i++) {
        let e = headingOneData[i];

        headOneLoop.innerHTML += `
          <div class="pcw-card">
          <span>${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        
      }
      headingOne.addEventListener("click", () => {
        
        let cardStyle = document.querySelectorAll(".pcw-card");
        headOnePopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
         e.classList.add("skeleton")
         setTimeout(() => {
          e.classList.remove("skeleton")
        }, 2000);
        });
      
      
      
       
     
      });

      // working on headingsTwo
      let headTwoLoop = document.querySelector(".headTwoLoop");
      headingTwo = document.querySelector(".headingTwo");
      headTwoPopup = document.querySelector(".headTwoData");
      headingTwoData = request.headingTwoData;
      for (let i = 0; i < headingTwoData.length; i++) {
        let e = headingTwoData[i];
        if (i <= 9) {
          headTwoLoop.innerHTML += `
          <div class="pcw-card ">
          <span>0${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        } else {
          headTwoLoop.innerHTML += `
          <div class="pcw-card ">
          <span>${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        }
      }

      headingTwo.addEventListener("click", () => {
        let cardStyle = document.querySelectorAll(".pcw-card");
        headTwoPopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
          e.classList.add("skeleton")
          setTimeout(() => {
           e.classList.remove("skeleton")
         }, 2000);
         });
    
      
      });

      // todo working for headThree
      let headThreeLoop = document.querySelector(".headThreeLoop");
      headingThree= document.querySelector(".headingThree");
      headThreePopup= document.querySelector(".headThreeData");
      headingThreeData = request.headingThreeData;

      for (let i = 0; i < headingThreeData.length; i++) {
        let e = headingThreeData[i];
        if (i <= 9) {
          headThreeLoop.innerHTML += `
          <div class="pcw-card ">
          <span>0${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        } else {
          headThreeLoop.innerHTML += `
          <div class="pcw-card ">
          <span>${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        }
      }
      headingThree.addEventListener("click", () => {
        let cardStyle = document.querySelectorAll(".pcw-card");
        headThreePopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
          e.classList.add("skeleton")
          setTimeout(() => {
           e.classList.remove("skeleton")
         }, 2000);
         });
    
     
      });

      // todo working for headFour
      let headFourLoop,headingFour,headFourPopup,headingFourData;
      headFourLoop = document.querySelector(".headFourLoop");
      headingFour= document.querySelector(".headingFour");
      headFourPopup= document.querySelector(".headFourData");
      headingFourData = request.headingFourData;

      for (let i = 0; i < headingFourData.length; i++) {
        let e = headingFourData[i];
        if (i <= 9) {
          headFourLoop.innerHTML += `
          <div class="pcw-card ">
          <span>0${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        } else {
          headFourLoop.innerHTML += `
          <div class="pcw-card ">
          <span>${i}</span>
          <h3>${e}</h3>
      </div>
          `;
        }
      }
      headingFour.addEventListener("click", () => {
        let cardStyle = document.querySelectorAll(".pcw-card");
        headFourPopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
          e.classList.add("skeleton")
          setTimeout(() => {
           e.classList.remove("skeleton")
         }, 2000);
         });
    
     
      });
      closeBtn.forEach((e) => {
        e.addEventListener("click", () => {
          popUpBox.forEach((e) => {
            e.style = `opacity:0%; visibility:hidden`;
          });
        });
      });

      headT = document.querySelector(".head-two");
      if (request.headingTwo === 1) {
        headT.innerText = `Used for a ${request.headingTwo} time `;
      } else if (request.headingTwo >= 2) {
        headT.innerText = `Used for ${request.headingTwo} times `;
      }

      headTh = document.querySelector(".head-three");
      if (request.headingThree === 1) {
        headTh.innerText = `Used for a ${request.headingThree} time `;
      } else if (request.headingThree >= 2) {
        headTh.innerText = `Used for ${request.headingThree} times `;
      }

      headF = document.querySelector(".head-four");
      if (request.headingFour === 1) {
        headF.innerText = `Used for a ${request.headingFour} time `;
      } else if (request.headingFour >= 2) {
        headF.innerText = `Used for ${request.headingFour} times `;
      }

      // todo this is for finidning all <a href links>
      let internalExtension,
        externalExtension,
        hrefData,
        internalLinks,
        hrefArray,
        externaLinks;
      let url = request.url.charAt(0).toUpperCase() + request.url.slice(1);

      internalExtension = document.querySelector(".internalData");
      externalExtension = document.querySelector(".externalData");
      hrefData = request.hrefLink;
      hrefArray = [];
      internalLinks = [];
      externaLinks = [];
      for (let i = 0; i < hrefData.length; i++) {
        const element = hrefData[i][1];
        hrefArray.push(element);
      }

      if (hrefArray.includes(url.toLowerCase())) {
        console.log(hrefArray);
      }

      //  ? starting to work for internal links
      hrefArray.forEach((e) => {
        if (e.includes(url.toLowerCase())) {
          internalLinks.push(e);
        } else {
          externaLinks.push(e);
        }
      });

      internalExtension.innerHTML = `${internalLinks.length} Links Detected`;
      externalExtension.innerHTML = ` ${externaLinks.length} Links Detected`;
      //  ? starting to work for external links

      //todo loopping imageAlt card from here
      let imageAltParent = document.querySelector(".fsr-wrapper");
      let imageData = request.imageAlts;
      let seeMoreImage = document.querySelector(".seeMoreImage");

      for (let i = 0; i < 4; i++) {
        const e = imageData[i];
        imageAltParent.innerHTML += `
        <section class="fsr-card skeleton ">
        <div class="fsrc-wrapper skeleton">
           <div style="opacity:0%;" class="skeleton"> <img class="fsr-image skeleton" src="${
             e.img
           }" alt=""></div>
            <div class="fsrcw-title skeleton" 
             >
                <h3>Image ${i + 1}</h3>
                <p>${e.alt}</p>
            </div>
        </div>
    </section>
        `;

        setTimeout(() => {
          imageAltParent.innerHTML = "";
        }, 1900);

        setTimeout(() => {
          if (imageAltParent.innerHTML.search("skeleton")) {
            imageAltParent.innerHTML += `
        <section class="fsr-card ">
        <div class="fsrc-wrapper">
            <img class="fsr-image" src="${e.img}" alt="">
            <div class="fsrcw-title " 
             >
                <h3>${url} Img ${i + 1}</h3>
                <p>${e.alt}</p>
            </div>
        </div>
    </section>
        `;
          }
        }, 2000);
      }

      // todo when the seemore button is clicked the images will loop more
      // ---------------------------------------------------------------------------------------------------
      // **--------------------------------------------------------------------------------------------------------------
      seeMoreImage.addEventListener("click", () => {
        for (let i = 0; i < imageData.length; i++) {
          const e = imageData[i];
          imageAltParent.innerHTML += `
          <section class="fsr-card skeleton ">
          <div class="fsrc-wrapper skeleton">
             <div style="opacity:0%;" class="skeleton"> <img class="fsr-image skeleton" src="${
               e.img
             }" alt=""></div>
              <div class="fsrcw-title skeleton" 
               >
                  <h3>${url} Img ${i + 1}</h3>
                  <p>${e.alt}</p>
              </div>
          </div>
      </section>
          `;

          setTimeout(() => {
            imageAltParent.innerHTML = "";
          }, 1900);

          setTimeout(() => {
            if (imageAltParent.innerHTML.search("skeleton")) {
              console.log("there is");
              imageAltParent.innerHTML += `
          <section class="fsr-card ">
          <div class="fsrc-wrapper">
              <img class="fsr-image" src="${e.img}" alt="">
              <div class="fsrcw-title " 
               >
                  <h3>${url} Img ${i + 1}</h3>
                  <p>${e.alt}</p>
              </div>
          </div>
      </section>
          `;
            }
          }, 2000);
        }
      });

      return true;
    }
  );
});
