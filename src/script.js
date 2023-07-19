const navToggleOpen = document.querySelector("#navToggleOpen");
const navToggleClose = document.querySelector("#navToggleClose");
const naviagtionScreenItems = document.querySelectorAll("#navigationScreen a");
const galleryImages = document.querySelectorAll(".chapter-gallery > img");
const imagePreview = document.querySelector("#imagePreview");
const navigationScreen = document.querySelector("#navigationScreen");
const sections = document.querySelector("section");
const headings = document.querySelectorAll(".chapter-heading > h3");
const headingsNav = document.querySelectorAll("nav > ul > li");
const contents = document.querySelectorAll(".chapter-content");

navToggleOpen.addEventListener("click", () => {
  navigationScreen.classList.remove("top-full");
  navigationScreen.classList.add("top-0");

  navToggleOpen.classList.remove("block");
  navToggleOpen.classList.add("hidden");

  navToggleClose.classList.add("block");
  navToggleClose.classList.remove("hidden");
});

navToggleClose.addEventListener("click", () => {
  navigationScreen.classList.remove("top-0");
  navigationScreen.classList.add("top-full");

  navToggleClose.classList.remove("block");
  navToggleClose.classList.add("hidden");

  navToggleOpen.classList.add("block");
  navToggleOpen.classList.remove("hidden");
});

naviagtionScreenItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigationScreen.classList.remove("top-0");
    navigationScreen.classList.add("top-full");

    navToggleClose.classList.remove("block");
    navToggleClose.classList.add("hidden");

    navToggleOpen.classList.add("block");
    navToggleOpen.classList.remove("hidden");
  });
});

const scrollToDiv = (targetEl, targetContainer) => {
  const innerDivPos = document.querySelector(targetEl).offsetTop;

  document.querySelector(targetContainer).scrollTo({
    top: innerDivPos - document.querySelector(targetContainer).offsetTop,
    behavior: "smooth",
  });
};

const scrollAt = (targetEl) => {
  const textElement = document.getElementById(targetEl);
  textElement.scrollIntoView({ behavior: "smooth" });
};

let options = {
  rootMargin: "0px",
  threshold: 0,
};
let optionsSection = {
  rootMargin: "-100px",
  threshold: 0,
};

let callbackSection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      headingsNav.forEach((nav) => {
        if (nav.id.includes(entry.target.id)) {
          nav.style.color = "red";
        } else {
          nav.style.color = "black";
        }
      });
    } else {
      entry.target.style.opacity = 0;
    }
  });
};

let observerSections = new IntersectionObserver(
  callbackSection,
  optionsSection
);

document.querySelectorAll("section").forEach((seciton) => {
  observerSections.observe(seciton);
});

contents.forEach((content) => {
  if (content.clientHeight < content.scrollHeight) {
    if (content.scrollTop === 0) {
      content.style.borderBottom = "2px solid black";
    }
  }
});

contents.forEach((content) => {
  content.addEventListener("scroll", () => {
    if (content.clientHeight < content.scrollHeight) {
      if (content.scrollTop === 0) {
        content.style.borderTop = "0 solid black";
        content.style.borderBottom = "2px solid black";
      } else if (
        content.scrollHeight - content.clientHeight ===
        content.scrollTop
      ) {
        content.style.borderTop = "2px solid black";
        content.style.borderBottom = "0 solid black";
      } else if (
        content.scrollTop !== 0 &&
        content.scrollHeight - content.clientHeight !== content.scrollTop
      ) {
        content.style.borderTop = "2px solid black";
        content.style.borderBottom = "2px solid black";
      }
    }
  });
});

window.ityped.init(document.querySelector(".welocme"), {
  strings: ["Vítejte!"],
  loop: false,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 5000,
  cursorChar: null,
});

window.ityped.init(document.querySelector(".welcome-intro"), {
  strings: ["Na stránkách Jana Mistríka"],
  loop: false,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 5000,
  cursorChar: null,
  startDelay: 2500,
});
