function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo ciudad no puede estar vacio";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El campo de descripcion es muy largo";
  }
  if (descripcionRegalo.length === 0) {
    return "El campo descripcion no puede estar vacio";
  }

  if (!/^[a-zA-Z0-9\_\-\.\,\s]+$/i.test(descripcionRegalo)) {
    return "El campo descripcion regalo solo puede tener letras,numeros,comas(,),guion(_),guion(-) y punto(.)";
  }
  return "";
}

function validarFormulario(event) {
  event.preventDefault();
  borrarErroresLi();
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    "descripcion-regalo": errorDescripcionRegalo,
    ciudad: errorCiudad,
    nombre: errorNombre,
  };

  const esExito = manejarErrores(errores) === 0;
  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    setTimeout(() => {
      window.location.href = `wishlist.html`;
    }, 5000);
  }
}

function borrarErroresLi() {
  const $erroresLi = document.querySelectorAll("li");
  for (let i = 0; i < $erroresLi.length; i++) {
    $erroresLi[i].remove();
  }
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    }
  });
  return cantidadErrores;
}
const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
