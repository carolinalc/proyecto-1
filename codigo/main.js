//console.log("probando main")


const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn")
const startScreen = document.querySelector("#splash-screen")
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")


//let game;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("iniciando juego")
  gameOverScreen.style.display = "none";
  canvas.style.display ="block";
  startScreen.style.display = "none";


  //empezar nuestra logica de juego
  //nuestro juego sera todo una nueva clase
  //vamos a crear un nuevo objeto de lo que será la clase Game
   game = new Game()
    game.gameLoop()
}



let keypress = (event) => {
    if(event.code === "Space" ){
        //como ejecutamos el metodo del pollo
       game.bolita.jumpBolita()
    }
}

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", startGame)
window.addEventListener("keydown", keypress)
