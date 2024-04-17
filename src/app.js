/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let who = ["El gato", "Mi hermano", "La vecina", "El policia"];
let action = ["perdio", "boto", "rompio", "olvido"];
let what = ["las llaves", "la billetera", "el carro", "el sombrero"];
let when = ["en la casa", "en el almuerzo", "ayer", "en la iglesia", "anoche"];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

window.onload = function() {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
};
