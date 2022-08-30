function allNotes() {
    alert('Una Redonda sonaría 1 Tiempo en un compas\n Una Blanca sonaría 2 Tiempos en un compas\n Una negra sonaría 4 Tiempos en un compas\n Una Corchea sonaría 8 Tiempos en un compas\n Una semicorchea sonaría 16 Tiempos en un compas\n Una Fusa sonaría 32 Tiempos en un compas\n Una Semifusa sonaría 64 Tiempos en un compas');    
} 

var incorrectas = 0

function question() {
    if (prompt('cuantas corcheas entran en una redonda (1 tiempo)') == 8) {
        alert('Bien Hecho');
        question2();
    } else {
        let respuesta = prompt('Te equivocaste. Quieres repasar el contenido?')
        incorrectas++
        if (respuesta == 'si') {
            allNotes();
            question();
        } else if (respuesta == 'no') {
            question();
        }
    }
}
function question2() {
    if (
        prompt('Que valor tiene una semifusa con respecto a una redonda?') == 64
    ) {
        alert('Va mejorando');
        question3();
    } else {
        var respuesta = prompt('Te equivocaste. Quieres repasar el contenido?')
        incorrectas++
        if (respuesta == 'si') {
            allNotes();
            question2();
        } else if (respuesta == 'no') {
            question2();
        }
    }
}
function question3() {
    if ((pregunta3 = prompt('Que valor tienen dos redondas ?') == 2)) {
        alert('Te estas conviertiendo en músico')
    } else {
        var respuesta3 = prompt(
            'Te equivocaste. Quieres volver a repasar el contenido?'
        )
        incorrectas++
        if (respuesta3 == 'si') {
            allNotes();
            question3();
        }
    }
}

function cuestionario() {
    do {
        incorrectas = 0
        question();
        if (incorrectas > 0) {
            alert('Respondiste ' + incorrectas + ' Incorrecta/s, vas a seguir constestando hasta que contestes TODO BIEN !!')
        }
    } while (incorrectas > 0)
}
function teoria() {
    allNotes();
}