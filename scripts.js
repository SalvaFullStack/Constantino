const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}


function imprimeTitulo(pregunta) {

    let newHTML = ""
    newHTML = `<p1>${pregunta.titulo}</p1>`

    return newHTML; 


}

function imprimeTodasLasRespuestas(pregunta) {
 
   for (let i = 0, i < Array.length; i++) {

     return `${pregunta.respuestas[i]}`


   }
}

function imprimeUnaRespuesta(respuesta) {

  return imprimeLabel() + imprimeInput(); 
}

function imprimeLabel(respuesta) {

  return `<label for="${pregunta.respuestas.id}">${pregunta.respuestas.label}</label>`

}

function imprimeInput(respuesta) {

  return `<input id="${pregunta.respuestas.id}" name="${pregunta.respuestas.name}" type="radio" value="${pregunta.respuestas.value}">`

    
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);