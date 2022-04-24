//console.log("probando bolita")

class Bolita {

    constructor(){

        this.x = 110; // posicion desde eje x
        this.y = 50;// posicion desde eje y
        this.w = 50; //wi    dth - ancho
        this.h = 50; //height - alto
        this.img = new Image()
        this.img.src = "../Imagenes/bolita.png"
        this.speed =1;
        this.jumpSpeed = 50;

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


       //mueve derecha
        moveRight = () => {
            this.x = this.x + 13;
        }


        //mueve izquierda
        moveLeft = () => {
            this.x = this.x - 13;
        }

        //mueve arriba
        moveUp = () => {
            this.y = this.y - 13;
        }


        //mueve abajo
        moveDown = () => {
            this.y = this.y + 13;
        }


}//final clase