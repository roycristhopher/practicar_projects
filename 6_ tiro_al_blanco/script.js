let figura = document.getElementById("cuadro")
let dibujar = figura.getContext("2d");

//variables de posición aleatoria para X y Y
const generarAleatorio = () => {
    let numeroRandom = Math.random();
    return numeroRandom;
}

dibujar.fillStyle = "grey";
dibujar.fillRect(0,0,figura.width,figura.height);

const disparar = (evento) => {
    let a = evento.pageX - figura.offsetLeft;
    let b = evento.pageY - figura.offsetTop;
    // let d = new Date();
    // let hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    alert(`Las coordenadas son x=${a} y y=${b}`);
}

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
    let num = generarAleatorio();

    let diana = [40,30,20,10,3];
    let color = [color1,color2,color1,color2,"red"];
    let xAleatorio = Math.round(num*(figura.width - (diana[0]*2))) + diana[0];
    let yAleatorio = Math.round(num*(figura.height - (diana[0]*2))) + diana[0];
    for(let i = 0; i < diana.length; i++){
        drawCircle(xAleatorio,yAleatorio,diana[i],color[i]);
    }
    return(num);
}

let x = generarDiana("red","white");
console.log(x)

//setInterval(()=>{generarDiana("red","white")},1000);
//figura.onclick = disparar;