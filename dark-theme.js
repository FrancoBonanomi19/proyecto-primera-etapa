const d = document;
let ls = localStorage;

export default function darkMode() {
  const $boton = d.createElement("button");
  const $darks = d.querySelectorAll("[data-dark]");
  console.log($darks);

  $boton.textContent = "🌙";

  d.body.appendChild($boton);

  $boton.classList.add("btn-theme");

  d.body.insertBefore($boton, d.body.children[0]);

  const modoOscuro = () => {
    $darks.forEach((el) => {
      el.classList.add("dark-background");
    });
    ls.setItem("theme", "dark");
    $boton.textContent = "🌞";
  };

  const modoLight = () => {
    $darks.forEach((el) => {
      el.classList.remove("dark-background");
    });
    ls.setItem("theme", "light");
    $boton.textContent = "🌙";
  };

  d.addEventListener("click", (e) => {
    if (e.target === $boton) {
      if (e.target.textContent === "🌙") {
        modoOscuro();
      } else if (e.target.textContent === "🌞") {
        modoLight();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      modoLight();
    }
    if (ls.getItem("theme") === "dark") {
      modoOscuro();
    }
  });
}
