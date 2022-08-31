const allNotes = [
    'Una Redonda sonaría 1 Tiempo en un compas\n',
    'Una Blanca sonaría 2 Tiempos en un compas\n',
    'Una negra sonaría 4 Tiempos en un compas\n',
    'Una Corchea sonaría 8 Tiempos en un compas\n',
    'Una semicorchea sonaría 16 Tiempos en un compas\n',
    'Una Fusa sonaría 32 Tiempos en un compas\n',
    'Una Semifusa sonaría 64 Tiempos en un compas',
]
const respuestas = {
    correctas: 0,
    incorrectas: 0,
}
const preguntas = [
    {
        'pregunta': "cuantas corcheas entran en una redonda(1 tiempo)",
        'respuesta': 8,
    },
    {
        'pregunta': "cuantos tiempos dura una semicorchea en un compas?",
        'respuesta': 16,
    },
    {
        'pregunta': "Cuantos tiempos dura un negra en un compas?",
        'respuesta': 4,
    }
]
function teoria() {
    alert(allNotes);
}
// console.log(preguntas.length);
function hacerPregunta() {
    var respuesta = '';

    let i = 0;
    for (i = 0; i <= preguntas.length - 1; i++) {
        respuesta = prompt(preguntas[i].pregunta);
        if (respuesta == preguntas[i].respuesta) {
            alert('Correcta ! 👍');
            respuestas.correctas++;
        }
        else {
            respuestas.incorrectas++;
            alert('Mal 🤮');
        }
    }
    return respuestas;
}
teoria();
var rtas = hacerPregunta();
alert('Contestaste ' + rtas.correctas + ' bien y ' + rtas.incorrectas + ' Mal');
if (rtas.incorrectas <= 0) {
    alert('Se nota que sabes de música👌, nos vemos pronto');
}
if (rtas.incorrectas > 0) {
    if (prompt('Te falta un poco de teoría🎶, queres volver a ver el contenido?') == 'si') {
        teoria();
        hacerPregunta();
    }
    else {
        alert('Así nunca vas a ver un progreso🤦‍♂️, Chau');
    }

}

