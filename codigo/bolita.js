//console.log("probando bolita")

class Bolita {

    constructor(){

        this.x = 110; // posicion desde eje x
        this.y = 50;// posicion desde eje y
        this.w = 50; //width - ancho
        this.h = 40; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/bolita.jpg"
        this.speed =1;
        //this.gravity = 0.05;
        //this.gravitySpeed = 0;
        this.jumpSpeed = 30;

    }
        //dibujar bolita
    drawBolita = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

        //gravedad bolita
    /*gravityBolita () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
      }*/

        //salto bolita
      jumpBolita = () =>{
        this.y = this.y - this.jumpSpeed;
    }
}