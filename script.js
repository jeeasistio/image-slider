// selectors
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".carousel img");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carousel.style.transform = "translatex(" + -size * counter + "px)";

// event listener
next.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carousel.style.transition = "transform 0.5s ease";
  counter++;
  carousel.style.transform = "translatex(" + -size * counter + "px)";
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 0.5s ease";
  counter--;
  carousel.style.transform = "translatex(" + -size * counter + "px)";
});

carousel.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lclone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - 2;
    carousel.style.transform = "translatex(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "fclone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - counter;
    carousel.style.transform = "translatex(" + -size * counter + "px)";
  }
});