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
      // document.body.prependChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/apexcharts';

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
        headThreePopup;

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
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
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
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
          }, 2000);
        });
      });

      // todo working for headThree
      let headThreeLoop = document.querySelector(".headThreeLoop");
      headingThree = document.querySelector(".headingThree");
      headThreePopup = document.querySelector(".headThreeData");
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
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
          }, 2000);
        });
      });

      // todo working for headFour
      let headFourLoop, headingFour, headFourPopup, headingFourData;
      headFourLoop = document.querySelector(".headFourLoop");
      headingFour = document.querySelector(".headingFour");
      headFourPopup = document.querySelector(".headFourData");
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
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
          }, 2000);
        });
      });
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
        const element = hrefData[i];
        hrefArray.push({ name: element[0], link: element[1] });
      }

      //  ? starting to work for internal links
      hrefArray.forEach((e) => {
        if (e.link.includes(url.toLowerCase())) {
          internalLinks.push({ name: e.name, link: e.link });
        } else {
          externaLinks.push({ name: e.name, link: e.link });
        }
      });

      internalExtension.innerHTML = `${internalLinks.length} Links Detected`;
      externalExtension.innerHTML = ` ${externaLinks.length} Links Detected`;
      //  ? starting to work for external links
      //todo working with internal Link
      let internalData, internalPopup, internalButton, internalLoop;
      internalData = internalLinks;
      internalPopup = document.querySelector(".internalLinksPopup");
      internalButton = document.querySelector(".internalButton");
      internalLoop = document.querySelector(".internalLoop");
      for (let i = 0; i < internalData.length; i++) {
        let e = internalData[i];
        if (i <= 9) {
          internalLoop.innerHTML += `
          <div class="aLink-card">
          <span>0${i}</span>
          <div class="alink-titles">
              <h3>${e.name}</h3>

              <p><a class="aLink" href="${e.link}" target="_blank"
                      rel="noopener noreferrer">${e.link}</a>
              </p>
          </div>
      </div>
          `;
        } else {
          internalLoop.innerHTML += `
          <div class="aLink-card">
          <span>${i}</span>
          <div class="alink-titles">
              <h3>${e.name}</h3>

              <p><a class="aLink" href="${e.link}" target="_blank"
                      rel="noopener noreferrer">${e.link}</a>
              </p>
          </div>
      </div>
          `;
        }
      }

      internalButton.addEventListener("click", () => {
        let cardStyle = document.querySelectorAll(".aLink-card");
        let cardA = document.querySelectorAll(".aLink");
        internalPopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
          }, 2000);
        });
        cardA.forEach((e) => {
          e.style.opacity = "0%";
          setTimeout(() => {
            e.style.opacity = "100%";
          }, 2000);
        });
      });

      // todo working for externl Links
      let externalLinkData, externalPopup, externalButton, externalLoop;
      externalLinkData = externaLinks;
      externalPopup = document.querySelector(".externalLinksPopup");
      externalButton = document.querySelector(".externalButton");
      externalLoop = document.querySelector(".externalLoop");

      for (let i = 0; i < externalLinkData.length; i++) {
        let e = externalLinkData[i];
        if (i <= 9) {
          externalLoop.innerHTML += `
          <div class="aLink-card">
          <span>0${i}</span>
          <div class="alink-titles">
              <h3>${e.name}</h3>

              <p><a class="aLink" href="${e.link}" target="_blank"
                      rel="noopener noreferrer">${e.link}</a>
              </p>
          </div>
      </div>
          `;
        } else {
          externalLoop.innerHTML += `
          <div class="aLink-card">
          <span>${i}</span>
          <div class="alink-titles">
              <h3>${e.name}</h3>

              <p><a class="aLink" href="${e.link}" target="_blank"
                      rel="noopener noreferrer">${e.link}</a>
              </p>
          </div>
      </div>
          `;
        }
      }

      externalButton.addEventListener("click", () => {
        let cardStyle = document.querySelectorAll(".aLink-card");
        let cardA = document.querySelectorAll(".aLink");
        externalPopup.style = `opacity:100%; visibility:visible`;
        cardStyle.forEach((e) => {
          e.classList.add("skeleton");
          setTimeout(() => {
            e.classList.remove("skeleton");
          }, 2000);
        });
        cardA.forEach((e) => {
          e.style.opacity = "0%";
          setTimeout(() => {
            e.style.opacity = "100%";
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

      // ! this is stats tab
      // todo working on popupstat button

      //  todo working with api of stats tab

      let similarWebApi = async () => {
        let statement = true;
        if (statement === true) {
          let websitename = request.website;
          let domain = websitename.match(
            /^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/
          )[1];

          let url = "https://data.similarweb.com/api/v1/data?domain=";

          let fetchingData = await fetch(`${url}${domain}`);
          let data = await fetchingData.json();

          // todo sitenames
          let siteName,
            siteImageData,
            siteRanking,
            siteCountryRanking,
            totalVisits,
            vistsDuration,
            pagesPerVisit,
            bounceRate;

          siteName = document.querySelector(".site-name");
          siteImageData = document.querySelector(".site-imageData");
          siteRanking = document.querySelector(".site-rankingData");
          siteCountryRanking = document.querySelector(
            ".site-CountryRankingData"
          );
          totalVisits = document.querySelector(".total-visits");
          vistsDuration = document.querySelector(".visit-duration");
          pagesPerVisit = document.querySelector(".pages-perVisit");
          bounceRate = document.querySelector(".bounce-rate");
          // todo---------------------------------------------------------------------
          // ***********************************************************************
          // ///////////////////////////////////////////////////////////////////////
          // ***********************************************************************
          // ///////////////////////////////////////////////////////////////////////
          // ***********************************************************************

          siteName.innerHTML = data.SiteName;
          siteImageData.src = data.LargeScreenshot;

          // this function will make 1000 to k 100000000 to million
          function numFormatter(num) {
            if (num > 999 && num < 1000000) {
              return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
            } else if (num > 1000000) {
              return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
            } else if (num > 1000000000) {
              return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 Billion
            } else if (num < 900) {
              return num; // if value < 1000, nothing to do
            }
          }
          siteRanking.innerHTML = numFormatter(data.GlobalRank.Rank);
          siteCountryRanking.innerHTML = numFormatter(data.CountryRank.Rank);
          totalVisits.innerHTML = numFormatter(data.Engagments.Visits);

          //  this function is for  time duration
          function time(value) {
            const sec = parseInt(value, 10); // convert value to number if it's string
            let hours = Math.floor(sec / 3600); // get hours
            let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
            let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
            // add 0 if value < 10; Example: 2 => 02
            if (hours < 10) {
              hours = "0" + hours;
            }
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
            return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
          }

          vistsDuration.innerHTML = time(data.Engagments.TimeOnSite);
          pagesPerVisit.innerHTML = parseFloat(
            data.Engagments.PagePerVisit
          ).toFixed(2);
          let rate = data.Engagments.BounceRate * 100;

          bounceRate.innerHTML = `${parseFloat(
            data.Engagments.BounceRate * 100
          ).toFixed(2)}%`;

          console.log(data);
          let estimatedMonthlyVisits = data.EstimatedMonthlyVisits;

          var options = {
            series: [
              {
                name: "Page Visit",
                data: [],
                color: "#FFE59A",
              },
            ],
            chart: {
              width: "100%",
              type: "area",
              offsetX: -15,
              toolbar: {
                autoSelected: "pan",
                show: false,
              },
            },
            markers: {
              size: 5,
              colors: ["#ffffff"],
              strokeColor: "#FFE59A",
              strokeWidth: 2,
            },

            grid: {
              show: false,
              padding: {
                left: 0,
                right: 0,
              },
            },
            dataLabels: {
              enabled: false,
            },

            stroke: {
              curve: "smooth",
              colors: ["#FFE59A"],
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            xaxis: {
              type: "datetime",
              categories: [],
            },
            tooltip: {
              style: {
                fontSize: "12px",
              },
              x: {
                format: "dd/MM/yy",
              },

              theme: "dark",
            },
            fill: {
              colors: ["#FFE59A"],
              type: "gradient",
              gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 90, 100],
              },
            },
          };
          for (var key in estimatedMonthlyVisits) {
            if (estimatedMonthlyVisits.hasOwnProperty(key)) {
              options.xaxis.categories.push(key);
              options.series[0].data.push(estimatedMonthlyVisits[key]);
            }
          }

          console.log(options.xaxis.categories);
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();

          // this is piechart
          let trafficSources = data.TrafficSources;
          var options2 = {
            series: [],
            colors: [
              "#f53b57",
              "#ffa801",
              "#0be881",
              "#1e272e",
              "#3c40c6",
              "#ff3f34",
            ],
            labels: [],
            chart: {
              type: "pie",
            },
            stroke: {
              colors: ["#ffffff"],
              width: "0",
            },
          };

          for (var key in trafficSources) {
            if (trafficSources.hasOwnProperty(key)) {
              options2.labels.push(key);
              options2.series.push(trafficSources[key] * 100);
            }
          }
          let pieDataDescription = document.querySelector(
            ".trafficSourceDescription"
          );
          pieDataDescription.innerHTML = `${domain} is Searched with ${options2.series[0].toFixed(
            2
          )}% of traffic coming from this channel, followed by Direct with ${options2.series[5].toFixed(
            2
          )}% `;

          var chart2 = new ApexCharts(
            document.querySelector("#sourcesDiagram"),
            options2
          );
          chart2.render();

          let categoriesDescription = document.querySelector(
            ".categoriesDescription"
          );
          categoriesDescription.innerHTML = `Users who visited ${domain} were also intrested in this category`;

          let rankedData = document.querySelector(".ranked-data");
          rankedData.innerHTML = data.CategoryRank.Rank;
        }
      };

      let statsButton = document.querySelector(".statsButton");

      let childClass = document.querySelector(".sb-wrapper").children;
      for (let i = 0; i < childClass.length; i++) {
        const element = childClass[i];
        element.classList.add("skeleton");
      }
      statsButton.addEventListener("click", () => {
        setTimeout(() => {
          similarWebApi();
          console.log("this is");
          for (let i = 0; i < childClass.length; i++) {
            const element = childClass[i];
            element.classList.remove("skeleton");
          }
        }, 4000);
      
      });
      return true;
    }
  );
});
