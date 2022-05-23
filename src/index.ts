// Codigo visto en clase de alcance de varialbes (scope)
let mensajeGlobal: string = "Hola Global!!";

function ambitoVariables() {
  let mensajeLocal: string;
  mensajeLocal = "Hola Mundo!!";
  console.log(mensajeLocal);
}

function ambitoDelAmbito() {
  let localMenssage: string = "Hola interno";
  ambitoVariables();
  console.log(localMenssage);
}

ambitoDelAmbito();
console.log(mensajeGlobal);
