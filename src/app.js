/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
  let excuse;
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  who = who[Math.floor(Math.random() * who.length)];
  action = action[Math.floor(Math.random() * action.length)];
  what = what[Math.floor(Math.random() * what.length)];
  when = when[Math.floor(Math.random() * when.length)];

  excuse = who + " " + action + " " + what + " " + when;

  return excuse;
}

window.onload = function() {
  //write your code here
  const excuse = generarExcusa();
  document.getElementById("excuse").textContent = excuse;

  // console.log(who + action + what + when);
};
