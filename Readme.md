# PROYECTO 1 - SUSUWATARI -
The susuwataris are magic little dust balls, they eat colorfull candy stars. You have to eat the correct colors to get maximun score, and avoid the stars that take away live.

# MVP (DOM - CANVAS)
- Five stars appear randomly from the right.
- The susuwatari moves with the arrows and jumps with the space.
- The red stars end the game.
- White, green, pink and yellow stars disappear with a collision.
- Pink and yellow stars accumulate points.
- White stars takes 1 point life.
- Green stars gives 1 point life
- You can add your name, and at the end screen you'll get your accumulated score.

# Backlog
- Ranking pole in local storage

# Data Structure
## main.js
- startGame 
- spacePress 
- rightPress
- leftPress
- upPress
- downPress
- backToStart
- clickstart 

## game.js
- Game => this.bolita, this.rojaArr, this.amarillaArr ,this.blancaArr, this.rosaArr, this.verdeArr, this.isGameOn, this.cambioPosicion
- addRoja
- addAmarilla
- addBlanca
- addRosa
- addVerde
- gameLoop
- gameOverRoja
- choqueAmarilla
- choqueBlanca
- choqueRosa
- choqueVerde

## amarilla.js
- Amarilla => this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed.
- drawAmarilla
- moveAmarilla

## roja.js
- Roja => this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed.
- drawRoja
- moveRoja

## blanca.js
- Blanca => this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed.
- drawBlanca
- moveBlanca

## rosa.js
- Rosa => this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed.
- drawRosa
- moveRosa

## verde.js
- Verde => this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed.
- drawVerde
- moveVerde

## bolita.js
- Bolita =>this.x, this.y, this.w, this.h, this.img, this.img.src, this.speed, this.jumpSpeed, 
- drawBolita
- gravityBolita
- hitBottom
- jumpBolita
- moveRight
- moveLeft
- moveUp
- moveDown

# States y States Transitions
- SplashScreen: Initial screen, with instructions first song to play, input to tape your name, scores boxes, presentation picture and start game button.  
- GameScreen: Screen where the game displays in a canvas, points and lives scores boxes and instructions. This screen plays automaticaly a game audio. 
- GameOverScreen: Final screen with a game over picture, button to restart, button to go back to initial screen, your final score above the picture and instructions. This screen plays automaticaly a game audio.


# LINKS
## Git
https://carolinalc.github.io/proyecto-1/
## Slides
URls for the project presentation (slides) Link Slides.com  