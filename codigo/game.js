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
        this.delete;
        this.score = 0;
        this.scoreVerde = 3;

    }

  
   
    


    // añadir mas estrellas
   addRoja = () => { 
    if(this.rojaArr[this.rojaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580; 
        this.newComida= new Roja(this.cambioPosicion, "../Imagenes/roja.png")
        this.rojaArr.push(this.newComida)}}

    addAmarilla = () => { 
    if(this.amarillaArr[this.amarillaArr.length - 1].x < 900){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Amarilla(this.cambioPosicion, "../Imagenes/amarilla.png")
        this.amarillaArr.push(this.newComida)}}
        
    
    addBlanca = () => { 
    if(this.blancaArr[this.blancaArr.length - 1].x < 1000){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Blanca(this.cambioPosicion, "../Imagenes/blanca.png")
        this.blancaArr.push(this.newComida)}}
        
    addRosa = () => { 
    if(this.rosaArr[this.rosaArr.length - 1].x < 800){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Rosa(this.cambioPosicion, "../Imagenes/rosa.png")
        this.rosaArr.push(this.newComida)}}
        
    addVerde = () => { 
    if(this.verdeArr[this.verdeArr.length - 1].x < 700){
        this.cambioPosicion = Math.random() *  580;
        this.newComida = new Verde(this.cambioPosicion, "../Imagenes/verde.png")
        this.verdeArr.push(this.newComida)}}



gameLoop = () => {
console.log(this.score)
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

     this.rosaArr.forEach((each) => {
        each.moveRosa()
    })

    this.verdeArr.forEach((each) => {
        each.moveVerde()
    })
    
   

    this.bolita.gravityBolita()
    


    //play and repeat
    if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)
        }

    //finiquito
    this.gameOverRoja()

    //desaparicion
    
      this.choqueAmarilla()
      this.choqueBlanca()
      this.choqueRosa()
      this.choqueVerde()


      //contador

      document.getElementById("laSuma").innerHTML = this.score;
      document.getElementById("laVida").innerHTML = this.scoreVerde;
    }


// choque con la roja
gameOverRoja = () => {

this.rojaArr.forEach((eachRoja) => {
if(this.bolita.x < eachRoja.x + eachRoja.w &&
    this.bolita.x + this.bolita.w > eachRoja.x &&
    this.bolita.y < eachRoja.y + eachRoja.h &&
    this.bolita.h + this.bolita.y > eachRoja.y)  {
        this.isGameOn = false;
        canvas.style.display = "none"
        gameOverScreen.style.display = "flex"}
})
}




//CHOQUE CON LAS ESTRELLAS
//amarilla
choqueAmarilla = () => {

    this.amarillaArr.forEach((eachAmarilla) => {
    if (this.bolita.x < eachAmarilla.x + eachAmarilla.w &&
      this.bolita.x + this.bolita.w > eachAmarilla.x &&
      this.bolita.y < eachAmarilla.y + eachAmarilla.h &&
      this.bolita.h + this.bolita.y > eachAmarilla.y
    ) {
      //eliminar eachAmarilla
      this.isGameOn = true;
      canvas.style.display = "block"
      
    this.delete = this.amarillaArr.indexOf(eachAmarilla)
    this.amarillaArr.splice(this.delete, 1)
    this.score++}
})
}

choqueBlanca = () => {

    this.blancaArr.forEach((eachBlanca) => {
    if (this.bolita.x < eachBlanca.x + eachBlanca.w &&
      this.bolita.x + this.bolita.w > eachBlanca.x &&
      this.bolita.y < eachBlanca.y + eachBlanca.h &&
      this.bolita.h + this.bolita.y > eachBlanca.y
    ) {
      //eliminar eachBlanca
      this.isGameOn = true;
      canvas.style.display = "block"
      
    this.delete = this.blancaArr.indexOf(eachBlanca)
    this.blancaArr.splice(this.delete, 1)
    this.scoreVerde = this.scoreVerde -1
    }else if(this.scoreVerde === 0){
        this.isGameOn = false;
        canvas.style.display = "none"
        gameOverScreen.style.display = "flex"
    }
})
}

choqueRosa = () => {

    this.rosaArr.forEach((eachRosa) => {
    if (this.bolita.x < eachRosa.x + eachRosa.w &&
      this.bolita.x + this.bolita.w > eachRosa.x &&
      this.bolita.y < eachRosa.y + eachRosa.h &&
      this.bolita.h + this.bolita.y > eachRosa.y
    ) {
      //eliminar eachRosa
      this.isGameOn = true;
      canvas.style.display = "block"
      
    this.delete = this.rosaArr.indexOf(eachRosa)
    this.rosaArr.splice(this.delete, 1)
    this.score = this.score + 3}
})
}


choqueVerde = () => {

    this.verdeArr.forEach((eachVerde) => {
    if (this.bolita.x < eachVerde.x + eachVerde.w &&
      this.bolita.x + this.bolita.w > eachVerde.x &&
      this.bolita.y < eachVerde.y + eachVerde.h &&
      this.bolita.h + this.bolita.y > eachVerde.y
    ) {
      //eliminar eachVerde
      this.isGameOn = true;
      canvas.style.display = "block"
      
    this.delete = this.verdeArr.indexOf(eachVerde)
    this.verdeArr.splice(this.delete, 1)
    this.scoreVerde = this.scoreVerde + 1;
    }
})
}


}//fin clase


