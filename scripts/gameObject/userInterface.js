import { GameObject } from "./gameObject.js"

export class GameText extends GameObject{
    constructor(text, x,y, height, width, {backgroundColor, textColor}){
        super(x,y,width,height,backgroundColor);
        this.text = text;
        this.textColor = textColor;
        
    }
    draw(ctx){
        ctx.font = `${this.size.width-40}px Georgia`;
        ctx.fillStyle = this.textColor;
        ctx.fillText(this.text, this.pos.x + this.offSet.x, this.pos.y*2 + this.offSet.y, this.size.width)
    }
}