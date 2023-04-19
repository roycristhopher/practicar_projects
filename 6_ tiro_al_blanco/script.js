let figura = document.getElementById("cuadro")
let dibujar = figura.getContext("2d");

dibujar.fillStyle = "grey";
dibujar.fillRect(0,0,figura.width,figura.height);

const disparar = (evento) => {
    let x = evento.pageX - figura.offsetLeft;
    let y = evento.pageY - figura.offsetTop;
    let d = new Date();
    let hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    alert(`la hora es ${hora} y las coordenadas son x=${x} y y=${y}`);
}

const drawCircle = (x=10,y=10,radio=10,color="red") => {
    dibujar.fillStyle = color;
    dibujar.beginPath();
    dibujar.arc(x,y,radio-1,0,2*Math.PI);
    dibujar.fill();
}

const valores = (color1,color2) => {

    let diana = [40,30,20,10,5];
    let color = [color1,color2,color1,color2,"red"];
    let x = Math.round(Math.random()*(figura.width - (diana[0]*2))) + diana[0];
    let y = Math.round(Math.random()*(figura.height - (diana[0]*2))) + diana[0];
    for(let i = 0; i < diana.length; i++){

        drawCircle(x,y,diana[i],color[i]);
    }
}

valores("black", "white");




