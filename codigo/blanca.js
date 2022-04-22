class Blanca {  

    constructor(){
        this.x = 40; // posicion desde eje x
        this.y = 40;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img1 = new Image()
        this.img1.src = "../Imagenes/roja.png"
        this.speed = 1;

    }

    drawComida = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    move = () => {
        this.x = this.x - this.speed;
    }

}