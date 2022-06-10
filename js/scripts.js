/*const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});*/

var nombre = document.querySelector("#nombre");
var kiro = document.getElementById('lb-nombre');

nombre.addEventListener('input', () => {
  if(nombre.value === null || nombre.value === ''){
    kiro.style.backgroundColor = 'red';
    console.log('Campo vacío.');
  } else if(nombre.length>50){
    console.log('Máximo chars');
  }else if(nombre != null && nombre != ''){
    kiro.backgroundColor = 'white';
  }
});