function pageTitle() {
  let pageTitle = document.getElementsByTagName("TITLE")[0];
  // document.querySelector("title");
  return pageTitle.innerText;
}

function url() {
  let url = window.location.toString();
  if (url.split(".").length >= 3) {
    return url.split(".")[1];
  }
  return url.split(".")[0].split("https://")[1];
}



function metaTag(name) {
  if (document.querySelector(`meta[name='${name}']`)) {
    let metaTag = document.querySelector(`meta[name='${name}']`);
    return metaTag.content;
  }
  return "OOOPS Not Found! ...";
}

function openG(name) {
  let openG = document.querySelector(`meta[property='${name}']`);
  return openG;
}

function headings(name, length) {
  if (length === "no") {
    let headingName = document.querySelectorAll(`${name}`);
    return headingName;
  } 
  if (length === "yes") {
    let headingName = document.querySelectorAll(`${name}`).length;
    return headingName;
  }
  throw new Error()
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

chrome.runtime.sendMessage({
  pageTitle: pageTitle(),
  metaTag: metaTag("description"),

  totalWords: totalWordsCount(),
  fbOg: openG("og:type"),
  twOg: openG("twitter:title"),
  headingOne: headings("h1", "yes"),
  headingTwo: headings("h2", "yes"),
  headingThree: headings("h3", "yes"),
  headingFour: headings("h4", "yes"),
  imageAlts: imageAlt(),
  url:url(),
});
