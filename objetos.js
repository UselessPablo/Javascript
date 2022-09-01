var respuestas = {
    correctas: 0,
    incorrectas: 0,
}

let preguntas = [
    {
        "pregunta": "cuantas corcheas entran en una redonda(1 tiempo)",
        "respuesta": 8,
    },
    {
        "pregunta": "Que valor tiene una semifusa con respecto a una redonda?",
        "respuesta": 64,
    },
    {
        "pregunta": "Que valor tienen 2 Redondas?",
        "respuesta": 2,
    }
]

function sonido() {
    alert("Una Redonda sonaría TA" + "  " + "Tiempo");
    // alert("Una Blanca sonaría TA TA" + " " + blanca + " " + "1/2 Tiempos");
    // alert("Una negra sonaría TA TA TA TA" + " " + negra + " " + "1/4 Tiempos");
    // alert("Una Corchea sonaria TA TA TA TA TA TA TA TA" + " " + corchea + " " + " 1/8 Ocho Tiempos");
    // alert("Una semicorchea sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA" + " " + semicorchea + " " + "1/16 tiempos");
    // alert("Una Fusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA" + " " + fusa + " " + "1/32 tiempos");
    // alert("Una Semifusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA" + " " + semifusa + " " + "1/64 tiempos");
}

function hacerPregunta() {
    var respuesta = "";

    console.log(preguntas.length);
    var i = 0;


    for (i = 0; i <= (preguntas.length - 1); i++) {

        respuesta = prompt(preguntas[i].pregunta);
        if (respuesta == preguntas[i].respuesta) {
            alert("Bien ahi");
            respuestas.correctas++;
        }
        else {
            respuestas.incorrectas++;
        }
    }
    return respuestas;
}

sonido();
var rtas = hacerPregunta();

alert("Contestaste " + rtas.correctas + " bien y " + rtas.incorrectas + " mal")

if (rtas.incorrectas > 0) {
    if (prompt("Te falta practica, queres ver de nuevo la teoria?") == "si") {
        sonido();
    }
    else {
        alert("jeropaa");
    }
}
else {
    alert("Puntuacion perfecta loquillo!!");
}






























