const d = document;

export default function slider() {
  const $slides = d.querySelectorAll(".items-container__item");
  const $left = d.querySelector(".prev");
  const $right = d.querySelector(".next");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $left) {
      e.preventDefault();
      $slides[i].classList.remove("visible");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("visible");
    }
    if (e.target === $right) {
      e.preventDefault();
      $slides[i].classList.remove("visible");
      i++;
      if (i > $slides.length - 1) {
        i = 0;
      }
      $slides[i].classList.add("visible");
    }
  });
}
