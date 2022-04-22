class Amarilla {  

    constructor(){
        this.x = canvas.width; // posicion desde eje x
        this.y = 120;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/amarilla.png"
        this.speed = 1;

    }

    drawAmarilla = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveAmarilla = () => {
        this.x = this.x - this.speed;
    }

}