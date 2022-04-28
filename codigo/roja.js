//console.log("probando comida")
 
class Roja {  

    constructor(ejeY, srcElem){
        this.x = canvas.width; // posicion desde eje x
        this.y = ejeY;// posicion desde eje y
        this.w = 75; //width - ancho
        this.h = 75; //height - alto
        this.img = new Image()
        this.img.src = srcElem
        this.speed = 4;

    }
        
    //dibujar
    drawRoja= () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)     
    }

    //movimiento
    moveRoja = () => {
        this.x = this.x - this.speed;
         }

}//fin clase