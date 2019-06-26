class Cannon extends Sprite {
    constructor (type) {
        const data = __g_resources.cannon['cannon'+type];
        // console.log(data);
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
            x: 434,
            y: 570,
            maxTick: 4,
            maxFrame: 4
        })
    }
    setNextCannon(type){
        if(type > 0 && type < 8){
            const data = __g_resources.cannon['cannon'+type];

            this.img = data.img;
            this.sx = data.frame.x;
            this.sy = data.frame.y;
            this.w = data.frame.w;
            this.h = data.frame.h;
            this.maxTick = 4;
            this.maxFrame = 4;
        } else {
            throw new Error('炮的类型只能是1-7之间');
        }

    }
}
