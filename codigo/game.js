//console.log("probando game")

class Game {
    constructor(){
        this.bolita = new Bolita()
        this.rojaArr= [new Roja(0,  "../Imagenes/roja.png")]
        this.amarillaArr= [new Amarilla(0, "../Imagenes/amarilla.png")]
        this.blancaArr= [new Blanca(0, "../Imagenes/blanca.png")]
        this.rosaArr= [new Rosa(0, "../Imagenes/rosa.png")]
        this.verdeArr= [new Verde(0, "../Imagenes/verde.png")]
        this.isGameOn = true;
        this.cambioPosicion;
        this.newComida = 0;
    }

    //

        
    // añadir mas estrellas
   addRoja = () => { 
    if(this.rojaArr[this.rojaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580; 
        this.newComida= new Roja(this.cambioPosicion, "../Imagenes/roja.png")
        this.rojaArr.push(this.newComida)}}

    addAmarilla = () => { 
    if(this.amarillaArr[this.amarillaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Amarilla(this.cambioPosicion, "../Imagenes/amarilla.png")
        this.amarillaArr.push(this.newComida)}}
        
    
    addBlanca = () => { 
    if(this.blancaArr[this.blancaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Blanca(this.cambioPosicion, "../Imagenes/blanca.png")
        this.blancaArr.push(this.newComida)}}
        
    addRosa = () => { 
    if(this.rosaArr[this.rosaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Rosa(this.cambioPosicion, "../Imagenes/rosa.png")
        this.rosaArr.push(this.newComida)}}
        
    addVerde = () => { 
    if(this.verdeArr[this.verdeArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Verde(this.cambioPosicion, "../Imagenes/verde.png")
        this.verdeArr.push(this.newComida)}}



gameLoop = () => {

    //quitar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //dibujar los elementos
    this.bolita.drawBolita()

    this.rojaArr.forEach((eachRoja) => {
        eachRoja.drawRoja()
    })

    this.amarillaArr.forEach((eachAmarilla) => {
        eachAmarilla.drawAmarilla()
    })

    this.blancaArr.forEach((eachBlanca) => {
        eachBlanca.drawBlanca()
    })

     this.verdeArr.forEach((eachVerde) => {
        eachVerde.drawVerde()
    })
   
    
    this.rosaArr.forEach((eachRosa) => {
        eachRosa.drawRosa()
    })

    this.addRoja()
    this.addAmarilla()
    this.addBlanca()
    this.addRosa()
    this.addVerde()


    //movimientos de los elementos
    this.rojaArr.forEach((each) => {
        each.moveRoja()
    })

    this.amarillaArr.forEach((each) => {
        each.moveAmarilla()
    })

   this.blancaArr.forEach((each) => {
        each.moveBlanca()
    })

     this.rosaArr.forEach((eachPipe) => {
        eachPipe.moveRosa()
    })

    this.verdeArr.forEach((eachPipe) => {
        eachPipe.moveVerde()
    })
    
    

    this.bolita.gravityBolita()
    


    //play and repeat
    if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)
        }

    //finiquito
    this.gameOverRoja()
}



gameOverRoja = () => {

this.rojaArr.forEach((eachRoja) => {
if(this.bolita.x < eachRoja.x + eachRoja.w &&
    this.bolita.x + this.bolita.w > eachRoja.x &&
    this.bolita.y < eachRoja.y + eachRoja.h &&
    this.bolita.h + this.bolita.y > eachRoja.y)  {

        this.isGameOn = false;
        canvas.style.display = "none"
        gameOverScreen.style.display = "flex"    }
})


}



}//fin clase


//let cambioPosicion;
//let newComida= 0;