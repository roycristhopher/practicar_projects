let figura = document.getElementById("cuadro")
let dibujar = figura.getContext("2d");

dibujar.fillStyle = "grey";
dibujar.fillRect(0,0,figura.width,figura.height);

const drawCircle = (x=10,y=10,radio=10,color="red") => {
    dibujar.fillStyle = color;
    dibujar.beginPath();
    dibujar.arc(x,y,radio-1,0,2*Math.PI);
    dibujar.fill();
}

const cleanFigure = () => {
    dibujar.clearRect(0,0,figura.width, figura.height);
}

const generarDiana = (color1,color2) => {
    cleanFigure();

    let diana = [40,30,20,10,5];
    let color = [color1,color2,color1,color2,"red"];

    let xAleatorio = Math.round(Math.random()*(figura.width - (diana[0]*2))) + diana[0];
    let yAleatorio = Math.round(Math.random()*(figura.height - (diana[0]*2))) + diana[0];
    for(let i = 0; i < diana.length; i++){
        drawCircle(xAleatorio,yAleatorio,diana[i],color[i]);
    }
    console.log("dentro de la función: "+xAleatorio, yAleatorio)
    return { x: xAleatorio, y: yAleatorio };

}

const disparar = (evento) => {
    let a = evento.pageX - figura.offsetLeft;
    let b = evento.pageY - figura.offsetTop;
}

//setInterval(()=>{generarDiana("black","white")},1000);

//figura.onclick = disparar;
