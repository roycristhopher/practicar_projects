let figura = document.getElementById("lienzo");
let dibujar = figura.getContext("2d");

dibujar.fillStyle = ("darkblue");
dibujar.fillRect(0,0,figura.width,figura.height);

const drawCircle = (x,y,radio) => {
  dibujar.fillStyle = "white";
  dibujar.beginPath();
  dibujar.arc(x,y,radio,0,2*Math.PI);
  
}