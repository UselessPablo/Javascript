
const Notes = {
redonda: 1,
blanca: 1/2,
negra: 1/4,
corchea: (1/4)/2,
semicorchea: (1/4)/4,
fusa: (1/4)/8,
semifusa: (1/4)/16,
allNotes: function(){
    alert ("Una Redonda sonaría TA"+" "+ " " + ""+ "Tiempo");
    alert( "Una Blanca sonaría TA TA" +" " + " "+"1/2 Tiempos");
    alert("Una negra sonaría TA TA TA TA"+ " " + " "+"1/4 Tiempos");
    alert("Una Corchea sonaria TA TA TA TA TA TA TA TA"+" " +" "+ " 1/8 Ocho Tiempos");
    alert("Una semicorchea sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" " + " " +"1/16 tiempos");
    alert("Una Fusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" + "+ "1/32 tiempos");
    alert("Una Semifusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" "+" "+ "1/64 tiempos");   
                    }
              }


Notes.allNotes();
function question(){
if (prompt("cuantas corcheas entran en una redonda (1 tiempo)") ==8){
    alert("Bien Hecho")
    question2();
}
else {
let respuesta = (prompt("Te equivocaste. Quieres repasar el contenido?")=="si");
    Notes.allNotes();
    question();
} if (respuesta== "no"){
    question()
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
        Notes.allNotes();
        question2();
    }
else if (respuesta=="no"){
    question2();
                         }
     }
}
function question3() {
    let pregunta3 = 2;
    while (pregunta3 = prompt("Que valor tienen dos redondas ?")==2);
    alert("Te estas conviertiendo en músico");
    
    while (pregunta3 !== 2) {
        let respuesta3 = prompt("Te equivocaste. Quieres volver a repasar el contenido?");
                            }
    
    if (respuesta3 == "si") {
        sonido();
        question3();
                            }
                     }
                    

