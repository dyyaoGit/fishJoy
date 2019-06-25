class BottomBar extends Sprite {
    constructor () {
        const data = __g_resources.bottom.bottom_bar;
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
            x: 390,
            y: 566
        })
    }
}
