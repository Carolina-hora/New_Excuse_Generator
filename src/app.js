/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const who = ["My dad", "My husband", "The movie star", "The President"];
  const action = ["deleted", "crashed", "erased", "destroyed"];
  const what = ["my laptop", "the house", "the pool", "my notebook"];
  const when = [
    "just before class",
    "at 4 am",
    "at the worst possible time",
    "last night"
  ];
  const randomValue = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  const whoRandom = randomValue(who);
  //console.log(whoRandom);
  const actionRandom = randomValue(action);
  //console.log(actionRandom);
  const whatRandom = randomValue(what);
  //console.log(whatRandom);
  const whenRandom = randomValue(when);
  //console.log(whenRandom);
  document.querySelector(
    "#excuse"
  ).innerHTML = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;

  //console.log("Hello Rigo from the console!");
};

let button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  window.onload();
});
