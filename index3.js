

// var suma = 4;  // var alcance global
// let nombre1 = 'pablo'; // alcance local
// const PI = 3.14; // es bueno declararla en mayúscula constante no se puede cambiar el valor//
// suma = 20;

// let numero1 = 1;
// let numero2 = 2;

// let resultado = numero1 + numero2;
// prompt // ingresar datos en la pantalla
// let nombre = prompt( 'Ingrese su Nombre para comenzar');
// let saludo = "Hola " + nombre + ", Bienvenido a mi sitio Web, presiona continuar"
// console.log (nombre);
// alert (saludo);
// let edad = prompt (' Cuantos años tenes ?');
// let años = "Te queda poco....disfruta gracias"
// alert (años);
// let si = true;
// let continuar = prompt ('Queres continuar?');
// if (continuar == si) {
//   prompt  ("bueno, sigamos");
// }
// else {
//     prompt ("chau");
//}

// const animal= prompt ("ingresa la especie de tu mascota");

// 
// if (animal == 'loro'){
// alert("Tu mascota es un loro");
// } else if (animal=="perro"){
//  alert (" es perro");
// }else if (animal=="gato"){
// alert ("es un gato");
// }else (animal == "loro")
// alert( "chau");
// 
// 

// const edad = Number(prompt("Decime tu edad, para poder ingresar deber ser mayor de edad"));
// let saludo = "Bienvenido al sitio"

// if (edad > 18){
//     alert("Podes ingresar" + ", " + saludo);
// }else if (edad < 21){
//     alert("Todavía sos menor");
// }else if  (isNaN(edad)){
//     alert("Debes ingresar un valor numerico");
//     alert("Debes volver a ingresar");

// }else {
//     alert("Gracias por ingresar");
// }
// const anioNacimiento = Number(prompt("ingresa tu año de nacimiento"));
// const anioActual = 2022;
// const condicion =  (anioActual - anioNacimiento) >= 21;
// const diferencia = (anioActual - anioNacimiento);




// if (condicion) {
//     alert ("felicitaciones pudiste entrar ya que tienes" + " "+ diferencia + " " + "años");
// }else if (diferencia > 14){
//     alert("no te desanimes "+ diferencia + "años puedes venir a comprar acá");
// }else{
//  alert ("uuh, sos menor, no puedes entrar tenes" + " "+ diferencia + " " +"años");
// }

//DESAFIO

// const inputValue = Number(prompt("Ingresá un número para saber la tabla del mismo"));


// for (let i = 0; i <= 10; i++) {
//     const resultado = i * inputValue
//     if (isNaN(inputValue)) {
//         alert("Debes ingresar un valor numérico");
//         break;
//     }
//     alert("el resultado de " + " " + i + " * " + inputValue + " = " + resultado);
// }
// alert("Muy bien ahora sabes la tabla del " + " " + inputValue)
// let nombre = prompt("ok, ahora decime tu nombre");
// alert(`Gracias ${nombre}`);
// const anios = Number(prompt("Gracias" + " " + nombre + " " + "Cuantos años tenes?"));
// const anioActual = 2022;
// let edad = (anioActual - anios);
// if (edad) {
// var respuesta = prompt("Naciste en el año" + " " + edad + "" + " " + "?");
// } else if (respuesta == "si") {
//     alert("Gracias por tu respuesta");
// } else {
//     alert("No entiendo que esta pasando");
// }



//funciones

// const participantes = Number(prompt("cuantas personas asistieron?"));

// function saludar (){
    
//     const nombre = prompt("ingresa tu nombre");
// alert("hola," + nombre);
//     }
//     for (let i = 0; i < participantes; i++){
//         saludar();
//     }

//     function calculadora (numA, numB, operacion){
//        switch (operacion){
//        case "-":
//         return numA-numB;
//        break;
//        case "+":
//         return numA+numB;
//        break;
//        case  "*":
//        return numA*numB;
//        break;
//        case "/":
//        return numa/numB;
//        break;
//        default:
//         return 0;
//         break;
//     }
// }
//  calculadora (3, 8, "*");
//    objetos literales
// const usuario = {
//     nombre: "pepe",
//     apellido: "perex",
//     edad: 42,
//     pelicula:{
//         pelicula1: "terminator",
//         pelicula2: "narcos",
//         pelicula3: "dumbo"
//     } 
    
//     }
//     usuario.apellido = "gomez";
//     usuario.ocupacion = "actor";
//     console.table(usuario);
//     console.table(usuario.pelicula["pelicula2"]);

//objetos constructores

// 
// function personaje(nombre, apellido, edad, pelicula){
    // this.nombre = nombre;
    // this.apellido = apellido;
    // this.edad = edad;
    // this.pelicula = pelicula;
// 
    // this.saludar = function (){
        // console.log("hola mi nombre es" + this.nombre);
    // }
// }
// const personaje2 = new personaje("tony", "montana","42", "scarface");
// console.table (personaje2);
// personaje2.saludar();
// 
// console.log ("nombre"in personaje2);
// 
// for (props in personaje2){
    // console.log(props);
    // console.table(personaje2[props]);
// }
// class Persona {
    // constructor(name, lastname, edad, pelicula){
        // this.nombre = name;
        // this.apellido = lastname;
        // this.edad = edad;
        // this.pelicula = pelicula;
// 
    // }
// saludo (){
    // console.log ("hola soy " + this.nombre);
// }
// }
// const Persona5 = new 
// 
// class producto {
    // constructor(nombre, precio, vendido){
        // this.nombre = nombre;
        // this.precio = precio;
        // this.vendido = vendido;
    // }
// precioConiva(){
    // return this.precio * 1.21;
// }
// vender(){
    // this.vendido = true;
// }
// }
// const arroz = new producto("arroz", 20, false);
// console.log(arroz)
//
// Arrays

const frutas = ['manzana', 'pera', 'frutilla','kiwi','naranja','sandia'];
const precios = [25, 7, 30];
const verduleria = [frutas[0], precios[0], frutas[1], precios[1], frutas[2], precios[2]];

// console.table(verduleria);
// 
// 
// for (let i = 0; i <= 3; i++){
    // verduleria[i]= precios[i] * 1.10;
//    
// }
// console.table(verduleria);
// 
// const dosDimensiones = [['manzana',25], ['pera',7], ['frutilla',30]];
// dosDimensiones.push('kiwi',24); //push agrega un elemento a un array
// for (let i = 0; i < dosDimensiones.length; i++){
    // dosDimensiones[i][1]=dosDimensiones[i][1]*1.21;
// 
// }
//console.table(dosDimensiones);
//const entrada = prompt('ingrese una nueva fruta');
//frutas.push(entrada);
// frutas.unshift(entrada); //asigna a la posicion 1 del array

// console.log(frutas);
// frutas.splice(2,3); //saca varios elementos 1er parametro posicion y segundo, cuantos.

// frutas.pop();// quita el elemento del final
// frutas.shift(); // quita el primer elemento
// const listadeFrutas = frutas.join(' - ');  //devuelve en string los elementos del array 
// console.table(frutas);
// console.log(copia);
// console.log(listadeFrutas);
// const copia = frutas.slice(2, 6);  //copia una parte del array dentro de uno nuevo
// const listadoDeproductos = frutas.concat(precios); //concatena dos arrays
// console.table(listadoDeproductos);
// console.log(frutas.indexOf); //devuelve la posicion de un valor
// includes //si existe el valor true false
// reverse //da vuelta el array
// 
const pablo = {
    nombre:'Pablo',
    apellido: 'Auterio'
};
const personas = [
{
    nombre: 'pepe',
    apellido: 'perex'
},
{
    nombre:'tony',
    apellido:'montana'
},
    pablo
]
for (persona of personas){
    console.log(persona.apellido);
}

