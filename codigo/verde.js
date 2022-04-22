class Verde {  

    constructor(){
        this.x = canvas.width; // posicion desde eje x
        this.y = 40;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/verde.png"
        this.speed = 1;

    }

    drawVerde = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveVerde = () => {
        this.x = this.x - this.speed;
    }

}