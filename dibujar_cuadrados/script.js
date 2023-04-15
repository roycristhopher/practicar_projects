let figura = document.getElementById("cuadrado2");
let dibujar = figura.getContext("2d");

dibujar.lineWidth = 5;

dibujar.fillStyle = "green";
dibujar.fillRect(0,0,figura.width,figura.height);
dibujar.strokeStyle = "black";
dibujar.strokeRect(0,0,figura.width,figura.height)

const crearCuadrado = (idcanvas, color, linecolor, numero) => {

    

}