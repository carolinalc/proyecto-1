

const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn")
const startScreen = document.querySelector("#splash-screen")
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const contador = document.querySelector("#contador-puntos")
const backbutton = document.querySelector("#back-btn")
const audio = new Audio ("./musica/juego.mp3")
const audioEnd = new Audio ("./musica/final.mp3")
const instrucciones = document.querySelector("#instrucciones")
const nameScore = document.querySelector("#name")
const nameOver = document.querySelector("#nombrepersona")
const marcador = document.querySelector("#marcador")
const botonOn = document.querySelector("musicBtn")
const audioInicio = new Audio ("./musica/Intro.mp3")


const startGame = () => {
    gameOverScreen.style.display = "none";
    canvas.style.display = "block";
    startScreen.style.display = "none";
    contador.style.display = "block"

    audio.play()
    audio.loop = true;
    audio.volume = 0.1;

    audioInicio.pause()

    nameOver.innerText = nameScore.value;
    console.log((nameScore).value)

    game = new Game()
    game.gameLoop()
}

// movimientos de la bolita
let spacePress = (event) => {
    if (event.code === "Space") {
        game.bolita.jumpBolita()
    }
}

let rightPress = (event) => {
    if (event.code === "ArrowRight") {
        game.bolita.moveRight()
    }
}

let leftPress = (event) => {
    if (event.code === "ArrowLeft") {
        game.bolita.moveLeft()
    }
}

let upPress = (event) => {
    if (event.code === "ArrowUp") {
        game.bolita.moveUp()
    }
}

let downPress = (event) => {
    if (event.code === "ArrowDown") {
        game.bolita.moveDown()
    }
}

//back to start screen button
let backToStart = () => {
    gameOverScreen.style.display = "none";
    startScreen.style.display = "block";
    canvas.style.display = "none";
    contador.style.display = "block"
    marcador.style.display ="block"
    audioEnd.pause()
}

let clickstart = () => {
  audioInicio.play()
  audioInicio.loop = true;
  audioInicio.volume = 0.1;
}

// * addEventListener

backbutton.addEventListener("click", backToStart)
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", startGame)

window.addEventListener("keydown", spacePress)
window.addEventListener("keydown", leftPress)
window.addEventListener("keydown", rightPress)
window.addEventListener("keydown", upPress)
window.addEventListener("keydown", downPress)



