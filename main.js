const d = document;

import darkMode from "./dark-theme.js";
import "./sass/main.scss";
import slider from "./slider.js";
import validarFormulario from "./validacion_formulario.js";

//console.log(document.querySelector("title").textContent);

d.addEventListener("DOMContentLoaded", () => {
  validarFormulario();
  slider()
});
darkMode();
