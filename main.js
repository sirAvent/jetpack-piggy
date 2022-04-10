const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 1;
let frame = 0; // Keeps track of frame count over the loop
let gamespeed = 3;

let playing = false;


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    pig.update();
    pig.draw();
    ctx.fillStyle = 'white';
    ctx.font = '45px Georgia';
    ctx.strokeText(frame,450,370);
    ctx.fillText(frame,450,370);
    handleCollisions;
    if (handleCollisions()){
        document.getElementById('play-btn').style="display:inline-block";
        return;
    }
    handleParticles()
    requestAnimationFrame(animate);
    angle+= 0.05;
    if (frame % 500==0)
    {
        gamespeed++;
    }
    frame ++;

}
animate();



window.addEventListener('keydown', function(e){
    if (e.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function(e){
    if (e.code === 'Space') spacePressed = false;
});


window.addEventListener('mousedown', function(e){
    spacePressed = true;
});

window.addEventListener('mouseup', function(e){
    spacePressed = false;
});

function handleCollisions() {
    for (let i = 0; i < obstacleArray.length; i++) {
        if (pig.x < obstacleArray[i].x + obstacleArray[i].width &&
            pig.x + pig.width > obstacleArray[i].x &&
            ((pig.y < 0 + obstacleArray[i].top && pig.y + pig.height > 0) ||
            (pig.y+50 >= canvas.height - obstacleArray[i].bottom &&
                pig.y + pig.height < canvas.height))){
                ctx.font = "25px Georgia";
                ctx.fillStyle = "black";
                ctx.fillText('Game Over. Score: ' + frame, 180,canvas.height/2)
                return true;
            }
    }
}