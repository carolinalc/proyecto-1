//console.log("probando game")

class Game {
    constructor(){
        this.bolita = new Bolita()
        this.amarilloArr= new Amarilla()
        this.blancaArr= new Blanca()
        this.rosaArr= new Rosa()
        this.rojaArr= new Roja()
        this.verdeArr= new Verde()
        this.isGameOn = true;
    }



gameLoop = () => {

    //quitar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //dibujar los elementos
    this.bolita.drawBolita()
    this.amarilloArr.drawAmarilla()
    this.blancaArr.drawBlanca()
    this.rosaArr.drawRosa()
    this.rojaArr.drawRoja()
    this.verdeArr.drawVerde()


    //movimientos de los elementos
    //this.bolita.gravityBolita()
    this.amarilloArr.moveAmarilla()
    this.rojaArr.moveRoja()
    this.blancaArr.moveBlanca()
    this.rosaArr.moveRosa()
    this.verdeArr.moveVerde()

    


    //play and repeat
    if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)
        }
}

}