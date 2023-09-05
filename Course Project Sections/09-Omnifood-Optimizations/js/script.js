/* Adding automatic year replacement */
const yearCopyrightEl = document.querySelector(".copyright span");
const currYear = new Date().getFullYear();
yearCopyrightEl.textContent = currYear;

/* Adding mobile navigation feature to work, to to appear */
const kebabBtn = document.querySelector(".btn-mobile-nav");
kebabBtn.addEventListener("click", toggleMobileNav);
const mainHeaderEl = document.querySelector(".header");

function toggleMobileNav() {
  mainHeaderEl.classList.toggle("nav-open");
}

/*Implementing smooth scrolling*/
//Selecting elements that only have the href property
const allAnchorTagEl = document.querySelectorAll("a:link");
allAnchorTagEl.forEach((linkEl) =>
  linkEl.addEventListener("click", (ev) => {
    ev.preventDefault();

    const href = linkEl.getAttribute("href");

    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile nav
    if (linkEl.classList.contains("main-nav-link")) {
      mainHeaderEl.classList.toggle("nav-open");
    }
  })
);

/*JS library that implements smooth scrolling for Safari*/
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

let bar = 0;
// Fixing lexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
