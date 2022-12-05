const canvas = document.getElementById('canvas1');
// Se declara la dimension en la que está la cual es 2d
const ctx = canvas.getContext('2d');
// se define el tamaño del canva
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
// se inicializa la variable tecla en 0
var tecla = 0;
// se exporta la imagen
const player = new Image();
player.src = 'shadow_dog.png';

let frameX = 0;
let frameY = 0;
let repetitions = 6;

let x = 0;
let y = 0;
// se define el tamaño de los sprites
const spriteWidth = 575;
const spriteHeight = 523;
// segun los frames se les dan las repeticiones
function animateTwo() {
    if (frameY == 0) repetitions = 6;
    else if (frameY == 1) repetitions = 6;
    else if (frameY == 2) repetitions = 6;
    else if (frameY == 3) repetitions = 8;
    else if (frameY == 4) repetitions = 10;
    else if (frameY == 5) repetitions = 4;
    else if (frameY == 6) repetitions = 6;
    else if (frameY == 7) repetitions = 6;
    else if (frameY == 8) repetitions = 11;
    else if (frameY == 9) repetitions = 3;
}
// con la tecla derecha se avanza de sprite
window.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') {
        frameY++;
        if (frameY > 9) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
    // con la tecla izquierda se retrocede
    if (e.key == 'ArrowLeft') {
        frameY--;
        if (frameY < 0) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
})
// se anima el canva
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    x++;
    requestAnimationFrame(animate);
}

animate();