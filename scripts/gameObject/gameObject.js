export class GameObject{
    constructor(x,y,h,w, color){
        this.color = color;
        this.pos={x,y};
        this.offSet={x,y}
        this.size={
            height: h,
            width: w
        }
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x + this.offSet.x, this.pos.y + this.offSet.y, this.size.width, this.size.height);
    }
    update(viewportX, viewportY){
        this.offSet.x = viewportX;
        this.offSet.y = viewportY;
    }
}