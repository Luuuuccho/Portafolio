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


const formulario = document.getElementById('form-contacto');


formulario.addEventListener("submit", e=>{
  e.preventDefault();
  let reglamail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(formulario.nombre.value == null || formulario.nombre.value == ''){
    console.log("No hay nada.");
  } else {
    console.log("Perfecto.");
  }
  if(reglamail.test(formulario.mail.value)){
    console.log("Mail válido");
  } else {
    console.log("Mail inválido");
  }

});



/*const formulario = document.getElementById('form-contacto');
const entradas = document.querySelectorAll('#form-contacto');
const validarFormulario = () =>{
}
entradas.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (lu) => {
  lu.preventDefault();
});*/