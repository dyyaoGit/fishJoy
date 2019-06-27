class Fish extends Sprite {
    constructor(type){
        if(type < 1 || type > 5){
            throw new Error('鱼的类型只能在1到5之间')
        }
        const data = window.__g_resources.fish['fish' + type]
        const rotation = Math.random() * 10 > 5 ? -75 - Math.random() * 30:75 + Math.random() * 30;
        const maxTick = Math.ceil(Math.random() * 8) + 4;
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
            maxFrame: 3,
            maxTick,
            rotation: rotation,
            x: rotation > 0 ? -100 : canvas.width + 100,
            y: Math.random() * canvas.height,
            speed: 8/maxTick * 1.2
        })
        // console.log(speed, 'speed', this.maxTick,'maxTick')
    }
    draw (ctx) {
        this.scale = this.rotation > 0 ? 1 : -1;
        this.rotation-=90;
        super.draw(ctx);
        this.rotation+=90;
    }
    collTest (cannon) {
        const fishR = this.w/2 > this.h/2 ? this.h : this.w;
        const cannonR = cannon.w/2 > cannon.h/2 ? cannon.h : cannon.w;
        const totalR = fishR + cannonR;

        const disX = this.x - cannon.x;
        const disY = this.y - cannon.y;

        const disR = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
        if(disR < totalR){ // 碰撞
            this.speed = 0;
            this.startFrame = 4;
            this.maxFrame = 7;
            this.die = 1;
            return true
        }
    }
}
