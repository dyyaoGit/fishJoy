class Bullet extends Sprite {
    constructor (type) {
        const data = __g_resources.bullet['bullet' + type];
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
            speed: 6
        })
    }
}
