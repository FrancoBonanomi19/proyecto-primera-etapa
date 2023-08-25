const d = document;

export default function validarFormulario() {
  const $inputs = d.querySelectorAll(".seccion-formulario__form [required]");
  $inputs.forEach((el) => {
    const $span = d.createElement("span");
    $span.textContent = el.title;
    $span.id = el.name;
    el.insertAdjacentElement("afterend", $span);
    $span.classList.add("none");
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".seccion-formulario__form [required]")) {
      const $input = e.target;
      const pattern = e.target.pattern || e.target.dataset.pattern;

      if (pattern) {
        const expReg = new RegExp(pattern);
        if (!expReg.test($input.value)) {
          d.getElementById($input.name).classList.add("invalido", "active");
        } else {
          d.getElementById($input.name).classList.remove("invalido", "active");
        }
      }

      if ($input.value === "") {
        d.getElementById($input.name).classList.remove("invalido", "active");
      }
      if (!pattern) {
        if ($input.value === "") {
          d.getElementById($input.name).classList.add("invalido", "active");
        } else {
          d.getElementById($input.name).classList.remove("invalido", "active");
        }
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    const $loader = d.querySelector(".loader");
    const $mensaje = d.querySelector(".mensaje");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      d.querySelector(".seccion-formulario__form").reset();
      $mensaje.classList.remove("none");
      setTimeout(() => $mensaje.classList.add("none"), 3000);
    }, 3000);
  });
}
