const crearCuadrado = (idcanvas, color, linewidth, numero) => {
    let tamañoX = 50;
    let tamañoY = 50;

    let figura = document.getElementById(idcanvas);
    let dibujar = figura.getContext("2d");
    let inicio = 0;

    dibujar.lineWidth = linewidth;
    dibujar.fillStyle = color;

    for (let i = 0; i < numero*50; i+=50){

        while (i < figura.width){
                console.log(i)
                dibujar.fillRect(i,0,tamañoX,tamañoY);
                dibujar.strokeStyle = "black";
                dibujar.strokeRect(i,0,tamañoX,tamañoY);
                i += 50;
                console.log(i);
        }


        
        // if (i < figura.width){

        //     console.log(i)
        //     dibujar.fillRect(i,0,tamañoX,tamañoY);
        //     dibujar.strokeStyle = "black";
        //     dibujar.strokeRect(i,0,tamañoX,tamañoY);
        // } else if (i >= figura.with) {
        //     i = 0;
        //     console.log("toca ir a la siguiente linea")
        // } 

    }

}