let body = document.querySelector("body");
body.style.margin = "0";

// container child 
let container = document.createElement("div");
container.style.width = "100%";
container.style.height = "100vh";
container.style.position = "relative";
body.appendChild(container);
// black flag 
let black = document.createElement("div");
black.style.position = "absolute";
black.style.top = "0";
black.style.width = "100%";
black.style.backgroundColor = "black";
black.style.height = "33.33333%";
container.appendChild(black);
// green flag 
let green = document.createElement("div");
green.style.position = "absolute";
green.style.bottom = "0";
green.style.width = "100%";
green.style.backgroundColor = "green";
green.style.height = "33.33333%";
container.appendChild(green);
// red flag
let red = document.createElement("div");
red.style.position = "absolute";
red.style.borderStyle = "solid";
red.style.borderColor = "transparent transparent transparent red";
red.style.borderWidth = "50vh";
container.appendChild(red);






// test code
// container.style.backgroundColor = "red";