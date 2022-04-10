const obstacleArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * 180) ;
        this.bottom = (150 - this.top);
        this.x = canvas.width;
        this.width = 50;
        this.color = 'white';
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillStyle = '#009A17';
        ctx.fillRect(this.x, canvas.height- this.bottom, this.width, this.bottom);
    }

    update() {
        this.x -= gamespeed;
        this.draw();
    }
}

function handleObstacles() {
    if (frame*(gamespeed/2) % 75 === 0) {
        obstacleArray.unshift(new Obstacle);
    }
    for (let i=0;i < obstacleArray.length; i++) {
        obstacleArray[i].update();
    }
    if (obstacleArray.length > 60) {
        obstacleArray.pop(obstacleArray[0]);
    }
}