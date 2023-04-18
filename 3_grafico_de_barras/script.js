
let posY = 0;

const graficar = (canvaID, lista, colores,texto) => {

  for (let i=0; i<lista.length; i++){
    
    let figura = document.getElementById(canvaID);
    let dibujar = figura.getContext("2d");
      
    dibujar.fillStyle = colores[i];
    dibujar.fillRect(50,posY,50,lista[i]);
    dibujar.strokeStyle = "black";
    dibujar.strokeRect(50,posY,50,lista[i]);

    posY = posY+lista[i];

    dibujar.font="15px Georgia";
    dibujar.fillStyle="black";
    dibujar.fillText(texto[i],0,posY);
    dibujar.fillText(lista[i],110,posY);

  }

}