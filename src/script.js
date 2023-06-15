const navToggleOpen = document.querySelector("#navToggleOpen");
const navToggleClose = document.querySelector("#navToggleClose");

const naviagtionScreenItems = document.querySelectorAll("#navigationScreen a");

const navigationScreen = document.querySelector("#navigationScreen");

const sections = document.querySelector("section");

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

const scrollAr = (targetEl) => {
  const textElement = document.getElementById(targetEl);
  textElement.scrollIntoView({ behavior: "smooth" });
};

window.addEventListener("wheel", function (e) {
  horizontal = e.currentTarget.scrollLeft;
  vertical = e.currentTarget.scrollTop;
});
