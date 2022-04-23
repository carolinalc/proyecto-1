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
    }

        
    // añadir mas estrellas
   addRoja = () => { 
    if(this.rojaArr[this.rojaArr.length - 1].x < 1000){
        cambioPosicion = Math.random() *  580; 
        newComida= new Roja(cambioPosicion, "../Imagenes/roja.png")
        this.rojaArr.push(newComida)}}

    addAmarilla = () => { 
    if(this.amarillaArr[this.amarillaArr.length - 1].x < 1000){
        cambioPosicion = Math.random() *  580;
        newComida = new Amarilla(cambioPosicion, "../Imagenes/amarilla.png")
        this.amarillaArr.push(newComida)}}
        
    
    addBlanca = () => { 
    if(this.blancaArr[this.blancaArr.length - 1].x < 1000){
        cambioPosicion = Math.random() *  580;
        newComida = new Blanca(cambioPosicion, "../Imagenes/blanca.png")
        this.blancaArr.push(newComida)}}
        
    addRosa = () => { 
    if(this.rosaArr[this.rosaArr.length - 1].x < 1000){
        cambioPosicion = Math.random() *  580;
        newComida = new Rosa(cambioPosicion, "../Imagenes/rosa.png")
        this.rosaArr.push(newComida)}}
        
    addVerde = () => { 
    if(this.verdeArr[this.verdeArr.length - 1].x < 1000){
        cambioPosicion = Math.random() *  580;
        newComida = new Verde(cambioPosicion, "../Imagenes/verde.png")
        this.verdeArr.push(newComida)}}



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
}

}


let cambioPosicion;
let newComida= 0;