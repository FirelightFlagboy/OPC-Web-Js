let div = document.getElementById("contenu");
let style_div = getComputedStyle(div);

console.log(style_div.height);
console.log(style_div.width);

let body = document.body;

let title = document.createElement("p");
title.textContent = "info sur l'elem"
body.appendChild(title);

let height = document.createElement("p");
height.textContent = "hauteur : " + style_div.height;
body.appendChild(height);

let width = document.createElement("p");
width.textContent = "longeur : " + style_div.width;
body.appendChild(width);