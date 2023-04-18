const crearCuadrado = (idcanvas, color, linewidth, numero, tamañoX = 100, tamañoY=100) => {
    
    let cuadradosPintados = 0;

    let figura = document.getElementById(idcanvas);
    let dibujar = figura.getContext("2d");

    dibujar.lineWidth = linewidth;
    dibujar.fillStyle = color;

    for (let i = 0; i < numero; i++) {
        // Calcular coordenadas x e y del cuadrado actual

        let x = (cuadradosPintados % (figura.width / tamañoX)) * tamañoX;
        let y = Math.floor(cuadradosPintados / (figura.width / tamañoX)) * tamañoY;

        // Pintar cuadrado en las coordenadas calculadas
        dibujar.fillRect(x, y, tamañoX, tamañoY);
        dibujar.strokeStyle = "black";
        dibujar.strokeRect(x, y, tamañoX, tamañoY);
    
        cuadradosPintados++;

    }
};

const crearCuadrado2 = (idcanvas, color, linewidth, numero) => {
    let tamañoX = 100;
    let tamañoY = 100;

    let figura = document.getElementById(idcanvas);
    let dibujar = figura.getContext("2d");

    dibujar.lineWidth = linewidth;
    dibujar.fillStyle = color;

    for (let i = 0; i < numero*tamañoX && i<figura.width; i+=tamañoX){
        dibujar.fillRect(i,0,tamañoX, tamañoY);
        dibujar.strokeStyle = "black";
        dibujar.strokeRect(i,0,tamañoX,tamañoY);
    }
}
