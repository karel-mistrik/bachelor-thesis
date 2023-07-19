const navToggleOpen = document.querySelector("#navToggleOpen");
const navToggleClose = document.querySelector("#navToggleClose");
const naviagtionScreenItems = document.querySelectorAll("#navigationScreen a");
const navigationScreen = document.querySelector("#navigationScreen");
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
          if (window.innerWidth >= 1280) {
            nav.style.transform = "translateY(10px)";
          }
          nav.style.color = "red";
        } else {
          nav.style.transform = "translateY(0)";
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

window.ityped.init(document.querySelector(".welocme"), {
  strings: ["Jan"],
  loop: false,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 5000,
  cursorChar: null,
});

window.ityped.init(document.querySelector(".welcome-intro"), {
  strings: ["Mistrík"],
  loop: false,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 5000,
  cursorChar: null,
  startDelay: 2500,
});
