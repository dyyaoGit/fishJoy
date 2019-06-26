class Buttons extends Sprite {
    constructor(name){
        const data = __g_resources.bottom[name];
        super({
            img: data.img,
            sx: data.frame.x,
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h
        })
    }
    setNextFrame (name) {
        const newData = __g_resources.bottom[name];
        this.sx = newData.frame.x;
        this.sy = newData.frame.y;
    }
}
