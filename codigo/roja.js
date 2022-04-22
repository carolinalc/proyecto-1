//console.log("probando comida")
 
class Roja {  

    constructor(){
        this.x = canvas.width; // posicion desde eje x
        this.y = 200;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/roja.png"
        this.speed = 1;

    }
        
    
    drawRoja= () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveRoja = () => {
        this.x = this.x - this.speed;
    }

}