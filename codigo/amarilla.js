class Amarilla {  

    constructor(ejeY, srcElem){
        this.x = canvas.width; // posicion desde eje x
        this.y = ejeY;// posicion desde eje y
        this.w = 60  ; //width - ancho
        this.h = 60  ; //height - alto
        this.img = new Image()
        this.img.src = srcElem
        this.speed = 3;

    }

    drawAmarilla = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveAmarilla = () => {
        this.x = this.x - this.speed;
    }

}