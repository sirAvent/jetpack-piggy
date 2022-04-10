const pigSprite = new Image();
pigSprite.src = 'https://cdn.discordapp.com/attachments/959304393323327549/961882133037727804/piggy.png';



class Pig {
    constructor() {
        this.x=150;
        this.y=200;
        this.vy=0; // vert speed
        this.width = 50;
        this.height = 50;
        this.weight = .25;
    }

    update() {
        if (spacePressed) {
            pigSprite.src = 'https://cdn.discordapp.com/attachments/959304393323327549/961881778073763870/piggyfly.png';
        } else {
            pigSprite.src = 'https://cdn.discordapp.com/attachments/959304393323327549/961882133037727804/piggy.png';
        }

        let curve = Math.sin(angle) * 5;
        if (this.y > canvas.height - (this.height * 1.2)) {
            this.y = canvas.height - (this.height * 1.2);
            this.vy = 0;
        } else {
        this.vy += this.weight;
        this.y += this.vy;
        }
        if (this.y < -50 + this.height) {
            this.y = -50 + this.height;
            this.vy=0;
        }
        if (spacePressed) this.boost();
    }

    draw() {
        ctx.fillStyle = 'pink';
        //ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(pigSprite,50,50,200,200,this.x,this.y,this.width*1.1,this.height*1.1);
    }
    boost() {
        this.vy -=.5;
    }
}
const pig = new Pig();