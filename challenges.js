// import React from "react";
function greeting(name) {
  const date = new Date();
  const hours = date.getHours();

  console.log(hours);
  let timeOfTheDay;
  const greeting =
    hours <= 11 ? (timeOfTheDay = "Morning") : (timeOfTheDay = "Evening");

  return console.log(greeting + " " + name);
}

greeting("bob");
