function pageTitle() {
  let pageTitle = document.getElementsByTagName("TITLE")[0];
  // document.querySelector("title");
  return pageTitle.innerText;
}

function url() {
  // todo this will detect url and sorts and take name of website
  // *** suppose you have www.facebook.com it will split ["www","facebook",".com"]
  // ? then returns facebook string
  let url = window.location.toString();
  if (url.split(".").length >= 3) {
    return url.split(".")[1];
  } else {
    return url.split(".")[0].split("https://")[1];
  }
}

function metaTag(name) {
  if (document.querySelector(`meta[name='${name}']`)) {
    let metaTag = document.querySelector(`meta[name='${name}']`);

    return metaTag.content;
  } else {
    return "OOOPS Not Found! ...";
  }
}

function openG(name) {
  let openG = document.querySelector(`meta[property='${name}']`);
  return openG;
}

function headings(name, length) {
  if (length === "no") {
    let headingName = document.querySelectorAll(`${name}`);
    let headingData = [];
    headingName.forEach((e) => {
      headingData.push(e.innerText);
    });
    return headingData;
  } else if (length === "yes") {
    let headingName = document.querySelectorAll(`${name}`).length;
    return headingName;
  }
}


// this is for finding <a links in website>
function href() {
  var x = document.querySelectorAll("a");
  var myarray = [];
  for (var i = 0; i < x.length; i++) {
    var nametext = x[i].textContent;
    var cleantext = nametext.replace(/\s+/g, " ").trim();
    var cleanlink = x[i].href;
    myarray.push([cleantext, cleanlink]);
  }

  return myarray;
}

function imageAlt() {
  let article = document.querySelectorAll("img");
  let images = [];

  article.forEach((e, i) => {
    if (e.getAttribute("alt")) {
      images.push({
        img: e.getAttribute("src"),
        alt: e.getAttribute("alt"),
      });
    }
  });

  return images;
}

function totalWordsCount() {
  if (document.querySelector("article")) {
    var bodyScripts = document.querySelectorAll("body script");
    for (var i = 0; i < bodyScripts.length; i++) {
      bodyScripts[i].remove();
    }
    let totalWords = document
      .querySelector("article")
      .innerText.replace(/\s+/g, "").length;
    return totalWords;
  }

  return "No Articles Found!";
}
function websiteName() {
  return window.location.hostname;
}

chrome.runtime.sendMessage({
  pageTitle: pageTitle(),
  metaTag: metaTag("description"),
  totalWords: totalWordsCount(),
  fbOg: openG("og:type"),
  twOg: openG("twitter:title"),
  headingOne: headings("h1", "yes"),
  headingOneData: headings("h1", "no"),
  headingTwo: headings("h2", "yes"),
  headingTwoData: headings("h2", "no"),
  headingThree: headings("h3", "yes"),
  headingThreeData: headings("h3", "no"),
  headingFour: headings("h4", "yes"),
  headingFourData: headings("h4", "no"),
  hrefLink: href(),
  imageAlts: imageAlt(),
  url: url(),
  website:websiteName(),
});
