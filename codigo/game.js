//console.log("probando game")

class Game {
    constructor(){
        this.bolita = new Bolita()
        this.amarilloArr= [new Amarilla(0)]
        this.blancaArr= [new Blanca(0)]
        this.rosaArr= [new Rosa(0)]
        this.rojaArr= [new Roja(0)]
        this.verdeArr= [new Verde(0)]
        this.isGameOn = true;
    }



gameLoop = () => {

    //quitar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //dibujar los elementos
    this.bolita.drawBolita()
    this.amarilloArr.drawComida()
    this.blancaArr.drawComida()
    this.rosaArr.drawComida()
    this.rojaArr.drawComida()
    this.verdeArr.drawComida()


    //movimientos de los elementos



    //play and repeat
    if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)
        }
}

}