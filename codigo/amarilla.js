class Amarilla {  

    constructor(){
        this.x = 40; // posicion desde eje x
        this.y = 40;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img3 = new Image()
        this.img3.src = "../Imagenes/amarilla.png"
        this.speed = 1;

    }

    drawComida = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    move = () => {
        this.x = this.x - this.speed;
    }

}