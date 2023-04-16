const crearCuadrado = (idcanvas, color, linewidth, numero) => {
    let tamañoX = 50;
    let tamañoY = 50;

    let figura = document.getElementById(idcanvas);
    let dibujar = figura.getContext("2d");
    let inicio = 0;

    dibujar.lineWidth = linewidth;
    dibujar.fillStyle = color;

    for (let i = 0; i < numero*50; i+=50){

        let a = i;
        console.log(a);
        dibujar.fillRect(i,0,tamañoX,tamañoY);
        dibujar.strokeStyle = "black";
        dibujar.strokeRect(i,0,tamañoX,tamañoY);    
    }

    inicio++;
}