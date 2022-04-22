class Blanca {  

    constructor(){
        this.x = canvas.width; // posicion desde eje x
        this.y = 160;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/blanca.png"
        this.speed = 1;

    }

    drawBlanca = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveBlanca = () => {
        this.x = this.x - this.speed;
    }

}