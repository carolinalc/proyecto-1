class Rosa {  

    constructor(){
        this.x = canvas.width; // posicion desde eje x
        this.y = 80;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 200; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/rosa.png"
        this.speed = 1;

    }

    drawRosa = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    moveRosa = () => {
        this.x = this.x - this.speed;
    }

}