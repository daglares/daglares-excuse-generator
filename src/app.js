/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];

  let action = ["ate ", "peed ", "crushed ", "broke "];

  let what = ["my homework ", "my phone ", "the car "];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let rdm1 = Math.floor(Math.random() * 4);
  let rdm2 = Math.floor(Math.random() * 4);
  let rdm3 = Math.floor(Math.random() * 3);
  let rdm4 = Math.floor(Math.random() * 4);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
};
