
let posY = 0;

const graficar = (canvaID, lista, colores,texto, titulo) => {

  for (let i=0; i<lista.length; i++){
    
    let figura = document.getElementById(canvaID);
    let dibujar = figura.getContext("2d");
      
    dibujar.fillStyle = colores[i];
    dibujar.fillRect(50,posY+25,50,lista[i]);
    dibujar.strokeStyle = "black";
    dibujar.strokeRect(50,posY+25,50,lista[i]);

    posY = posY+lista[i];

    dibujar.font="15px Georgia";
    dibujar.fillStyle="black";
    dibujar.fillText(titulo,0,15);
    dibujar.fillText(texto[i],0,posY+20);
    dibujar.fillText(lista[i],110,posY+20);

  }

}