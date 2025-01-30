'use strict';
/* DOM | Document Object Model */
// Manipulación del DOM
// Obtener, Cambiar, Agregar, Eliminar
/* const elementoBody = document.querySelector('body');
console.log(elementoBody);
const elementoRaiz = document.getElementById('raiz');
console.log(elementoRaiz);
elementoRaiz.textContent = 'Hola, soy el texto de contenido.';
elementoRaiz.className = 'texto-azul';
elementoBody.innerHTML = `<p>Hola, soy un párrafo.</p>`; */

/*
Manipulación del DOM
Eventos
Reactividad
*/
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    alert('Procesando solicitud...');

    console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);

});