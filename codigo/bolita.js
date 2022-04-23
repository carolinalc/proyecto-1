//console.log("probando bolita")

class Bolita {

    constructor(){

        this.x = 110; // posicion desde eje x
        this.y = 50;// posicion desde eje y
        this.w = 70; //width - ancho
        this.h = 80; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/bolita.jpg"
        this.speed =1;
        this.jumpSpeed = 30;

    }
        //dibujar bolita
    drawBolita = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

        //gravedad bolita
    gravityBolita = () => {
        this.y = this.y + this.speed;
        this.hitBottom();
      }             


        //que pare abajo del canvas
    hitBottom = () => {
        if (this.y > canvas.height - 50) {
            this.y = canvas.height - 50;
            
        }
    }


        //salto bolita
      jumpBolita = () =>{
        this.y = this.y - this.jumpSpeed;
    }
}