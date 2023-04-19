let figura = document.getElementById("cuadro")
let dibujar = figura.getContext("2d");

dibujar.fillStyle = "darkblue";
dibujar.fillRect(0,0,figura.width,figura.height);

const disparar = (evento) => {
    let x = evento.pageX - figura.offsetLeft;
    let y = evento.pageY - figura.offsetTop;
    let d = new Date();
    let hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    alert(`la hora es ${hora} y las coordenadas son x=${x} y y=${y}`);
}

figura.onclick = disparar;