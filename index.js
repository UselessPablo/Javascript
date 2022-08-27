
const redonda = 1;
const blanca = (redonda/2);
const negra = (redonda/4);
const corchea = (negra/2);
const semicorchea = (negra/4);
const fusa = (negra/8);
const semifusa = (negra/16);
 

function sonido (){
   alert("Una Redonda sonaría TA"+" "+ redonda +" "+ "Tiempo" );
    alert( "Una Blanca sonaría TA TA" +" " + blanca + " "+"1/2 Tiempos");
    alert("Una negra sonaría TA TA TA TA"+ " " + negra+ " "+"1/4 Tiempos");
    alert("Una Corchea sonaria TA TA TA TA TA TA TA TA"+" " +corchea+ " "+ " 1/8 Ocho Tiempos");
    alert("Una semicorchea sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" " + " " +"1/16 tiempos");
    alert("Una Fusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" + "+ "1/32 tiempos");
    alert("Una Semifusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" "+" "+ "1/64 tiempos");
}


sonido();
function question(){
if (prompt("cuantas corcheas entran en una redonda (1 tiempo)") ==8){
    alert("Bien Hecho")
    question2();
}
else {
var respuesta = prompt("Te equivocaste. Quieres repasar el contenido?");
if(respuesta==='si'){
    sonido();
    question();
}
else if (respuesta== "no"){
    question()
}
}
}
question();

function question2(){
if (prompt("Que valor tiene una semifusa con respecto a una redonda?")==64){
    alert("Muy Bien")
    question3();
}
else {
    var respuesta = prompt("Te equivocaste. Quieres repasar el contenido?");
if(respuesta=="si"){
        sonido();
        question2();
    }
else if (respuesta=="no"){
    question2();
}
}
}
function question3(){
let pregunta3 = 2;
 do {
    let pregunta3 = prompt("Que valor tienen dos redondas ?");
    if (pregunta3!==2){
        let respuesta3 = prompt("Te equivocaste. Quieres volver a repasar el contenido?");
 if (respuesta3=="si"){
  sonido();
  question3();  
}
    }
} while (pregunta3!==2);
   alert("Te estas conviertiendo en músico");
}

    

// }
// function direccion(calle, numeracion){
//     const direccion = prompt("Ingrese su calle y numeración");
// }
// function edades(){
//     const edad = Number(prompt("Ingrese su edad"));

// if (edad>= 18) {
//     alert("eres mayor de edad");
// }else{
//     alert("todavia eres menor")
// }
    

// }


// nombre();
// direccion();
// edades();