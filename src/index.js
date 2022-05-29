import React from "react";
import ReactDOM from "react-dom";

const yourName = "Tommy Evertsen";
let date = new Date();
let year = date.getFullYear();
let Copyright = "Copyright";

ReactDOM.render(
  <div>
    <p> Created by {yourName} </p>
    <p>
      {" "}
      {Copyright} {year}
    </p>
  </div>,

  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
