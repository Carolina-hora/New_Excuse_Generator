/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//data
const who = ["My dad", "My husband", "The movie star", "The President"];
const action = ["deleted", "crashed", "erased", "destroyed"];
const what = ["my laptop", "the house", "the pool", "my notebook"];
const when = [
  "just before class",
  "at 4 am",
  "at the worst possible time",
  "last night"
];

//choosing a random index for each array
const randomValue = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

//Creating the arrow function that will generate the random excuse
const excuseGenerator = () => {
  const whoRandom = randomValue(who);
  const actionRandom = randomValue(action);
  const whatRandom = randomValue(what);
  const whenRandom = randomValue(when);

  let excuse = document.querySelector(".excuse");
  excuse.innerHTML = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
  return;
};

// attaching the function excuseGenerator to the window.onload Event
window.onload = () => {
  excuseGenerator();
};

//creating a button that executes the function excuseGenerator when the user clicks it
const button = document.querySelector(".myButton");
button.addEventListener("click", () => {
  excuseGenerator();
});
