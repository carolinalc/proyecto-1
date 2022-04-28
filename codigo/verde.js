class Verde {  

    constructor(ejeY, srcElem){
        this.x = canvas.width; // posicion desde eje x
        this.y = ejeY;// posicion desde eje y
        this.w = 45; //width - ancho
        this.h = 45; //height - alto
        this.img = new Image()
        this.img.src = srcElem
        this.speed = 2;

    }

    //dibujar
    drawVerde = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    //movimiento
    moveVerde = () => {
        this.x = this.x - this.speed;
    }

}//fin clase