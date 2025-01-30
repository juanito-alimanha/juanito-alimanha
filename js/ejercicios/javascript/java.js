'use strict';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert('Procesando solicitud...');

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

});