const links = document.querySelectorAll("nav a");

for (let link of links) {
  link.addEventListener("click", pedirPagina);
}

function pedirPagina(event) {
  event.preventDefault(event.target);
  const url = "html/" + event.target.dataset.pagina + ".html";
  const miPagina = document.querySelector("#inicio");

  fetch(url)
    .then((pagina) => {
      return pagina.text();
    })
    .then((page) => {
      miPagina.innerHTML = page;
    })
    .catch((err) => console.error(err));
}
// Dark mode
const toggleBtn = document.getElementById("toggleTheme");
const icon = toggleBtn.querySelector("i");

// Al cargar la página, aplicar tema guardado si existe
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  icon.style.backgroundColor = "rgb(201, 164, 0)";
  icon.style.borderRadius = "50%";
  icon.style.padding = "13px";
}

// Al hacer clic en el botón, alternar modo y guardar en localStorage
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.backgroundColor = "rgb(201, 164, 0)";
    icon.style.borderRadius = "50%";
    icon.style.padding = "13px";
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.backgroundColor = "transparent";
    icon.style.padding = "0";
    localStorage.setItem("theme", "light");
  }
});