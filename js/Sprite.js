class Sprite {
    constructor (option) {
        this.img = option.img || '';
        this.sx = option.sx || 0;
        this.sy = option.sy || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.speed = option.speed || 0;
        this.rotation = option.rotation || 0;
        this.scale = option.scale || 1;
        this.frame = option.frame || 0;
        this.maxFrame = option.maxFrame || 0;
        this.tick = option.tick || 0;
        this.maxTick = option.maxTick || 0;
    }
    draw (ctx) {
        ctx.save();
        // console.log(this.sy);
        ctx.translate(this.x,this.y);
        ctx.rotate(ang(this.rotation));
        ctx.scale(1, this.scale);
        ctx.drawImage(this.img, this.sx, this.sy, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();
    }
    move () {
        var speed = this.speed;
        var speedX = speed*Math.sin(ang(this.rotation));
        var speedY = speed*Math.cos(ang(this.rotation));
        this.x +=speedX;
        this.y -=speedY;
    }
    nextFrame () {
        this.tick++;
        if(this.tick == this.maxTick){
            if(this.frame == this.maxFrame){
                this.frame = 0;
            } else {
                this.frame++;
                this.sy = this.frame * this.h;
            }
            this.tick = 0;
        }
    }
    outOfCanvas () {
        if (
            this.x < -(this.w + 100) ||
            this.x > (canvas.width + 100) ||
            this.y < -(this.h + 100) ||
            this.y > canvas.width + 100
        ){
            return true
        } else {
            return false
        }
    }
}
