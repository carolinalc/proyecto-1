PROYECTO 1 - SUSUWATARI -
Los susuwataris son bolitas de hollin mágicas que comen estrellitas de colores. Tu bolita tiene que comerse las estrellas correctas, conseguir el maximo posible de puntos y vidas. 

MVP (DOM - CANVAS)
cinco estrellas que aparecen por la derecha.
las estrellas aparecen de forma random desdde la derecha.
la bolita de mueve con las flechas y salta con el espacio.



four tentacles stacking will end the game
cannonballs destroy tentacles
reload time for shooting cannonballs
Increasing dificulty

Backlog
add scoreboard
Ability to start the game on increased dificulty lvl

        Data Structure
main.js
buildSplashScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}

game.js
Game () {}
starLoop () {}
checkCollisions () {}
addTentacle () {}
clearCanvas () {}
updateCanvas () {}
drawCanvas () {}
GameOver () {}

ship.js
Ship () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
shoot () {}
checkScreenCollision () {}

tentacle.js
Tentacle () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
checkCollisionBotton () {}

cannonball.js
Cannonball () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
checkCollisionTop () {}

        States y States Transitions
Definition of the different states and their transition (transition functions)

splashScreen
gameScreen
gameOverScreen

Task
main - buildDom
main - buildSplashScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen
game - startLoop
game - buildCanvas
game - updateCanvas
game - drawCanvas
tentacle - draw
tentacle - move
game - addTentacle
ship - draw
ship - move
ship - shoot
game - addShip
cannonball - draw
cannonball - move
game - checkCollision
game - GameOver
game - addEventListener

Links
Trello
Link url

Git
URls for the project repo and deploy Link Repo Link Deploy

Slides
URls for the project presentation (slides) Link Slides.com