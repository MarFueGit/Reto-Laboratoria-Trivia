// codigo del modal
// guardamos cada elemento por clase y por id
let modal = document.querySelectorAll(".modal")[0];
let modalT = document.querySelectorAll(".modal-trivia")[0];
let inputName = document.getElementById("inputName");
let botonJugar = document.getElementById("botonJugar");
const bienvenida = document.getElementById("bienvenida");
let nombreJugadora = "";

// aqui agregamos un evento al input cuando el usuario oprimay levante una tecla y lo
// guardamos en nombreJugadora.
inputName.addEventListener("keyup", function (event) {
  nombreJugadora = event.target.value;
});

/*  Esta funcion es para mostrar el modal en pantalla
 */

function mostrarModal() {
  modalT.style.opacity = "1";
  modalT.style.visibility = "visible";
  modal.classList.toggle("modal-close");
}

// Aqui ejecutamos mostrar modal y se ejecuta toda la funcion de arriba
mostrarModal();

// Este evento se ejecuta cuando se da click al boton jugar
botonJugar.addEventListener("click", function () {
  // aqui cerramos el modal despues de un segundo
  modal.classList.toggle("modal-close");
  modalT.style.opacity = "0";
  modalT.style.visibility = "hidden";
  setTimeout(function () {}, 1000);

  // Evaluo si la jugadora puso su nombre muestra la bienvenida con su nombre
  if (nombreJugadora !== "") {
    bienvenida.innerText = `Bienvenida, ${nombreJugadora}`;
    bienvenida.classList.remove("hideWelcome");
  }
});

// Guardamos la respuesta del usuario
let respuestaUsuario = "";

// Declaramos una funcion que recibe la respuesta del usuario y se le asigna a respuestaUsuario
function setRespuestaUsuario(respuesta) {
  respuestaUsuario = respuesta;
}

let respuestaUsuario2 = "";
function setRespuestaUsuario2(respuesta) {
  respuestaUsuario2 = respuesta;
}

let respuestaUsuario3 = "";
function setRespuestaUsuario3(respuesta) {
  respuestaUsuario3 = respuesta;
}

// Guardamos la referencia del botonResponder en la variable botonResponder
const botonResponder = document.getElementById("responder");
const respuestaCorrecta = document.getElementById("p1");
const respuestaCorrecta2 = document.getElementById("p2");
const respuestaCorrecta3 = document.getElementById("p3");
const mensajeCorrectas = document.getElementById("mensajeCorrectas");
let cantidadCorrectas = 0;

// Aqui el botonResponder al hacer click hace que pase un evento
botonResponder.addEventListener("click", function () {
  // Aqui hacemos las comparaciones: si respuestaUsuario es === a los angeles enviara un
  // mensaje de correcto, y si no enviara el mensaje de incorrecto

  // ------- p1 -------------------

  // Obtenemos los 3 inputs de la pregunta 1 y lo convertimos en un array
  const inputsP1 = Array.from(document.getElementsByName("p1"));
  // Del array de inputs buscamos la posicion del cual apreto el usuario por medio de la propiedad checked
  const indexChecked = inputsP1.findIndex((input) => input.checked);
  // Obtenemos el span con el id compuesto por p1 y la pocision del input que apreto el usuario
  const spanChecked = document.getElementById(`p1_${indexChecked}`);

  if (respuestaUsuario === "Los Angeles") {
    // si la respuesta fue correcta, creamos un nuevo elemento de tipo icono
    const correctIcon = document.createElement("i");
    // Al icono creado, le agregamos las clases de fontawesomes
    correctIcon.classList.add("fa-solid");
    correctIcon.classList.add("fa-check");
    // Al span que obtuvimos le agregamos como hijo el icono
    spanChecked.appendChild(correctIcon);
    // Iluminamos de color verde la pregunta
    respuestaCorrecta.classList.add("correcta");
    cantidadCorrectas++;
  } else {
    const incorrectIcon = document.createElement("i");
    incorrectIcon.classList.add("fa-solid");
    incorrectIcon.classList.add("fa-x");
    spanChecked.appendChild(incorrectIcon);
    respuestaCorrecta.classList.add("incorrecta");
  }

  // --------- p2 ---------------
  // Obtenemos los 3 inputs de la pregunta 2 y lo convertimos en un array
  const inputsP2 = Array.from(document.getElementsByName("p2"));
  // Del array de inputs buscamos la posicion del cual apreto el usuario por medio de la propiedad checked
  const indexChecked2 = inputsP2.findIndex((input) => input.checked);
  // Obtenemos el span con el id compuesto por p2 y la pocision del input que apreto el usuario
  const spanChecked2 = document.getElementById(`p2_${indexChecked2}`);

  if (respuestaUsuario2 === "New York") {
    // si la respuesta fue correcta, creamos un nuevo elemento de tipo icono
    const correctIcon = document.createElement("i");
    // Al icono creado, le agregamos las clases de fontawesomes
    correctIcon.classList.add("fa-solid");
    correctIcon.classList.add("fa-check");
    // Al span que obtuvimos le agregamos como hijo el icono
    spanChecked2.appendChild(correctIcon);
    // Iluminamos de color verde la pregunta
    respuestaCorrecta2.classList.add("correcta");
    cantidadCorrectas++;
  } else {
    const incorrectIcon = document.createElement("i");
    incorrectIcon.classList.add("fa-solid");
    incorrectIcon.classList.add("fa-x");
    spanChecked2.appendChild(incorrectIcon);
    respuestaCorrecta2.classList.add("incorrecta");
  }

  // ----------------p3-------------------
  // Obtenemos los 3 inputs de la pregunta 3 y lo convertimos en un array
  const inputsP3 = Array.from(document.getElementsByName("p3"));
  // Del array de inputs buscamos la posicion del cual apreto el usuario por medio de la propiedad checked
  const indexChecked3 = inputsP3.findIndex((input) => input.checked);
  // Obtenemos el span con el id compuesto por p3 y la pocision del input que apreto el usuario
  const spanChecked3 = document.getElementById(`p3_${indexChecked3}`);

  if (respuestaUsuario3 === "2015") {
    // si la respuesta fue correcta, creamos un nuevo elemento de tipo icono
    const correctIcon = document.createElement("i");
    // Al icono creado, le agregamos las clases de fontawesomes
    correctIcon.classList.add("fa-solid");
    correctIcon.classList.add("fa-check");
    // Al span que obtuvimos le agregamos como hijo el icono
    spanChecked3.appendChild(correctIcon);
    // Iluminamos de color verde la pregunta
    respuestaCorrecta3.classList.add("correcta");
    cantidadCorrectas++;
  } else {
    const incorrectIcon = document.createElement("i");
    incorrectIcon.classList.add("fa-solid");
    incorrectIcon.classList.add("fa-x");
    spanChecked3.appendChild(incorrectIcon);
    respuestaCorrecta3.classList.add("incorrecta");
  }

  // Le ponemos la cantidad de aciertos y mostramos el mensaje
  mensajeCorrectas.innerText = `Obtuviste ${cantidadCorrectas} respuestas correctas`;
  mensajeCorrectas.classList.remove("resultadoHide");
});
