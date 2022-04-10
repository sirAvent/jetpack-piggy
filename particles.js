const particlesArray = [];

class Particle {
    constructor() {
        this.y = pig.y;
        this.x = pig.x;
        this.size= 6;
        if (spacePressed) {
            this.size = 12;
        } else {
            this.size = 6;
        }
        this.speedY = 0;
        this.color = 'lightgray';
    }
    update() {
        this.x -= gamespeed;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y+20, this.size,0,Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
 
    if (frame %15==0) {
        particlesArray.unshift(new Particle);
    }

    for (i=0;i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    if (particlesArray.length > 200){
        for (let i =0; i< 20; i++){
            particlesArray.pop(particlesArray[i]);
        }
    }
}