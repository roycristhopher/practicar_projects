
let figura = document.getElementById("cuerpo");
let pincel= figura.getContext("2d")

pincel.fillStyle = "grey";
pincel.fillRect(0,0,figura.width,figura.height);

pincel.fillStyle = 'darkgreen';
pincel.fillRect((figura.width-350)/2, (figura.height-300)/2, 350,300);
pincel.strokeStyle = "black";
pincel.strokeRect((figura.width-350)/2, (figura.height-300)/2, 350,300);

pincel.fillStyle = "black";
//no es necesario volver a definir el color si el color va a ser mismo en adelante

pincel.fillRect(((figura.width-90)/2)-(175/2)+7,((figura.width-90)/2)-(300/2), 90, 90)

pincel.fillRect(((figura.width-90)/2)+(175/2)-7,((figura.width-90)/2)-(300/2), 90, 90)

pincel.fillRect((figura.width-70)/2,(figura.height/2)-5,70,100)

pincel.fillRect(((figura.width)/2)+35,(figura.height/2)+40,40,110)

pincel.fillRect(((figura.width)/2)-70,(figura.height/2)+40,40,110)


