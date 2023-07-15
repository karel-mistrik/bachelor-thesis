const navToggleOpen = document.querySelector("#navToggleOpen");
const navToggleClose = document.querySelector("#navToggleClose");

const naviagtionScreenItems = document.querySelectorAll("#navigationScreen a");

const galleryImages = document.querySelectorAll(".chapter-gallery > img");
const imagePreview = document.querySelector("#imagePreview");

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

galleryImages.forEach((image) => {
  image.addEventListener("click", async (e) => {
    imagePreview.style.backgroundImage = `url("${e.target.src}")`;
    imagePreview.classList.remove("scale-0");
    imagePreview.classList.add("scale-50");
  });
});

imagePreview.addEventListener("click", () => {
  imagePreview.classList.remove("scale-50");
  imagePreview.classList.add("scale-0");
});

const loadImg = function (img, url) {
  return new Promise((resolve, reject) => {
    img.style.backgroundImage = `url("${url}")`;
    img.onload = () => resolve(img);
    img.onerror = () => reject(img);
  });
};

const headings = document.querySelectorAll(".chapter-heading > h3");
const headingsNav = document.querySelectorAll("nav > ul > li");

let options = {
  rootMargin: "0px",
  threshold: 0,
};

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.innerHTML) {
      headingsNav.forEach((nav) => {
        if (nav.id.includes(entry.target.parentElement.parentElement.id)) {
          nav.style.color = "red";
        } else {
          nav.style.color = "black";
        }
      });
    }
  });
};

let observer = new IntersectionObserver(callback, options);

headings.forEach((heading) => {
  observer.observe(heading);
});

// GLOBAL PROGRESS BAR
// const scrollContainer = document.querySelector("main");

// scrollContainer.addEventListener("scroll", (evt) => {
//   console.log(
//     scrollContainer.scrollLeft /
//       (scrollContainer.scrollWidth - scrollContainer.clientWidth)
//   );
//   document.querySelector("#progressBar").style.width = `${
//     (scrollContainer.scrollLeft /
//       (scrollContainer.scrollWidth - scrollContainer.clientWidth)) *
//     100
//   }%`;
// });

const contents = document.querySelectorAll(".chapter-content");

contents.forEach((content) => {
  if (content.clientHeight < content.scrollHeight) {
    if (content.scrollTop === 0) {
      content.style.borderBottom = "2px solid black";
    }
  }
});

contents.forEach((content) => {
  content.addEventListener("scroll", (evt) => {
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
