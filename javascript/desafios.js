//DESAFIOS//

/* Este archivo tiene como fnalidad almacenar 
los desafios de clase*/

/*1. Crear una variable y asignarle su nombre, crear una constante y asignarle su
edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años.*/

/*let nombre = 'Juan Jose Aguirre';
const miEdad = 24 ;


console.log('Hola, soy' , nombre , 'y tengo' , miEdad , 'años.');
console.log(`Hola, soy ${nombre} y tengo  ${miEdad}  años`);*/
/* FUNCIONES */
/*function miFuncion() {
    console.log('Pepita Pérez');
  }
  
  miFuncion();*/


  /*2. Crear una función llamada presentarme, dentro crear una variable y asignarle
su nombre, crear una constante y asignarle su edad, luego imprimir en consola:
Hola, soy ____ y tengo ____ años.*/

/*function presentarme() {
let nombre = 'Juan Jose Aguirre';
const miEdad = 24 ;
console.log(`Hola, soy ${nombre} y tengo ${miEdad} años.`);
}*/

/*  3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir
en consola: Hola, soy ____ y tengo ____ años.

/*function presentacion (nombre, edad){
console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
}
presentacion('Juan Jose',edad);*/



/* 4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.*/

function presentacion (nombre, apellido, edad = 100){
console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
}
presentacion('Alberto','Gutierrez');
