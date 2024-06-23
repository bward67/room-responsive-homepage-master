/*
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

*/

const body = document.querySelector("body");
const hamburgerIcon = body.querySelector(".hamburger-icon");
const navDropdownMenu = body.querySelector(".nav-dropdown-menu");
const closeMenu = body.querySelector(".close-menu");
const overlay = body.querySelector(".overlay");
const arrowContainerMobile = body.querySelector(
  ".slider-arrow-container-mobile"
);
const mobileImageSlides = [
  ...body.querySelectorAll(".carousel-image-container img"),
];
const mobileContentSlides = [...body.querySelectorAll(".hero-content-slide")];
//console.log(mobileContentSlides);
//console.log(mobileImageSlides);

const desktopImageSlides = [...body.querySelectorAll(".desktop-image")];
console.log(desktopImageSlides);
const desktopContentSlides = [
  ...body.querySelectorAll(".desktop-content-slide"),
];
const prevArrow = arrowContainerMobile.querySelector(".prev");
const nextArrow = arrowContainerMobile.querySelector(".next");
const prevArrowDesktop = body.querySelector(".prev-desktop");
console.log(prevArrowDesktop);
const nextArrowDesktop = body.querySelector(".next-desktop");

let index = 0;

//FUNCTIONS
const showImageSlides = () => {
  mobileImageSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  mobileImageSlides[index].classList.add("active");
};
const showContentSlides = () => {
  mobileContentSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  mobileContentSlides[index].classList.add("active");
};

const showImageSlidesDesktop = () => {
  desktopImageSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  desktopImageSlides[index].classList.add("active");
};

const showContentSlidesDesktop = () => {
  desktopContentSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  desktopContentSlides[index].classList.add("active");
};

//EVENT LISTENERS
hamburgerIcon.addEventListener("click", () => {
  console.log("clicked");
  navDropdownMenu.style.visibility = "visible";
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  console.log("clicked close");
  navDropdownMenu.style.visibility = "hidden";
  overlay.style.display = "none";
});

nextArrow.addEventListener("click", () => {
  index++;
  if (index >= mobileImageSlides.length) {
    index = 0;
  }
  showImageSlides();

  if (index >= mobileContentSlides.length) {
    index = 0;
  }
  showContentSlides();
});

prevArrow.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = mobileImageSlides.length - 1;
  }
  showImageSlides();

  if (index < 0) {
    index = mobileContentSlides.length - 1;
  }
  showContentSlides();
});

nextArrowDesktop.addEventListener("click", () => {
  index++;
  if (index >= desktopImageSlides.length) {
    index = 0;
  }
  showImageSlidesDesktop();

  if (index >= desktopContentSlides.length) {
    index = 0;
  }
  showContentSlidesDesktop();
});

prevArrowDesktop.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = desktopImageSlides.length - 1;
  }
  showImageSlidesDesktop();

  if (index < 0) {
    index = desktopContentSlides.length - 1;
  }
  showContentSlidesDesktop();
});
