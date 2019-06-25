class Fish extends Sprite {
    constructor(type){
        if(type < 1 || type > 5){
            throw new Error('鱼的类型只能在1到5之间')
        }
        const data = window.__g_resources.fish['fish' + type]
        const rotation = Math.random() * 10 > 5 ? -90:90;
        const maxTick = Math.ceil(Math.random() * 8) + 4;
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
            maxFrame: 3,
            maxTick,
            rotation: rotation + Math.random() * 15,
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
}
