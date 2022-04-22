//console.log("probando comida")
 
class Roja {  

    constructor(){
        this.x = 40; // posicion desde eje x
        this.y = 40;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img1 = new Image()
        this.img1.src = "../Imagenes/roja.png"
        this.img2 = new Image()
        this.img2.src = "../Imagenes/blanca.png"
        this.img3 = new Image()
        this.img3.src = "../Imagenes/amarilla.png"
        this.img4 = new Image()
        this.img4.src = "../Imagenes/rosa.png"
        this.img5 = new Image()
        this.img5.src = "../Imagenes/verde.png"
        this.speed = 1;

    }

    drawComida = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    move = () => {
        this.x = this.x - this.speed;
    }

}