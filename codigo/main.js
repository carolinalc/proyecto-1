

const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn")
const startScreen = document.querySelector("#splash-screen")
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const napBtn = document.querySelector("#nap-btn")



const startGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display ="block";
  startScreen.style.display = "none";


    game = new Game()
    game.gameLoop()
}



let spacePress = (event) => {
    if(event.code === "Space" ){
       game.bolita.jumpBolita()
    }
}

let rightPress = (event) => {
if(event.code === "ArrowRight"){
    game.bolita.moveRight()
    }
}

let leftPress = (event) => {
    if(event.code === "ArrowLeft"){
        game.bolita.moveLeft()
    }
}



// * addEventListener
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", startGame)
window.addEventListener("keydown", spacePress)
window.addEventListener("keydown", leftPress)
window.addEventListener("keydown", rightPress)
