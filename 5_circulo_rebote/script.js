let figura = document.getElementById("lienzo");
let dibujar = figura.getContext("2d");

dibujar.fillStyle = "darkgreen";
dibujar.fillRect(0,0,figura.width,figura.height);

const drawCircle = (x,y,radio) =>{
  dibujar.fillStyle = "white";
  dibujar.beginPath();
  dibujar.arc(x,y,radio,0,2*Math.PI);
  dibujar.fill()
}

const clean = () => {dibujar.clearRect(0,0,figura.width, figura.height)};

const move = (x,y,tamaño, time) => {

  const moveCircle = () => {

    clean();
    drawCircle(x,y,tamaño);
    x++;
    y++
    console.log(x)
    if(x>=figura.width){
      clearInterval(a);
    }
  }

  let a = setInterval(moveCircle, time)
}

move(50,50,20,20)