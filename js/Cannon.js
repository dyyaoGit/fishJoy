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
            y: 570
        })
    }
}
