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
