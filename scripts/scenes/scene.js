export class Scene{
    constructor(ctx, entityStack, textStack, {w,h}, {background, border}){
        this.width = w;
        this.height = h;
        this.x = [(ctx.canvas.width-this.height)*0.5];
        this.y = [(ctx.canvas.height-this.height)*0.5];
        this.entityStack = entityStack;
        this.textStack = textStack;
        this.style = {background, border}
    }
    draw(ctx){
        /*---- background ----*/
        //background
        ctx.drawImage(this.style.background, this.x[0], this.y[0])
        
        /*---- Entity Stack ----*/
        for(let obj of this.entityStack){
            if(obj.pos.x + obj.size.width + this.x[0] < this.x[0] ||
                obj.pos.x+this.x[0] > this.x[0] + this.width ||
                obj.pos.y + obj.size.height +this.y[0]< this.y[0] ||
                obj.pos.y+this.y[0] > this.y[0] + this.height){
                continue;
            }
            obj.draw(ctx);
        }
        /* ---- text rendering ----*/
        for(let obj of this.textStack){
            if(obj.pos.x + obj.size.width + this.x[0] < this.x[0] ||
                obj.pos.x+this.x[0] > this.x[0] + this.width ||
                obj.pos.y + obj.size.height +this.y[0]< this.y[0] ||
                obj.pos.y+this.y[0] > this.y[0] + this.height){
                continue;
            }
            obj.draw(ctx, this.x[0], this.y[0]);
        }

        //cleans border
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x[0]-64, this.y[0]-64, 64, this.height+128);
        ctx.fillRect((this.x[0]+this.width), this.y-64, 64, this.height+128);
        ctx.fillRect(this.x[0], this.y[0]-64, this.width, 64);
        ctx.fillRect(this.x[0], this.y[0]+this.height, this.width, 64);
        //draws border
        ctx.fillStyle = this.style.border;
        ctx.fillRect(this.x[0], this.y[0], 2, this.height);
        ctx.fillRect(this.x[0]+this.width, this.y[0], 2, this.height)
        ctx.fillRect(this.x[0],this.y[0],this.width, 2);
        ctx.fillRect(this.x[0], this.y[0]+this.height, this.width+1, 2)
    }
    update(ctx){
        this.x[0] = (ctx.canvas.width- this.width) * 0.5;
        this.y[0] = (ctx.canvas.height - this.height) *0.5;
        for(let obj of this.entityStack){
            obj.update(this.x[0], this.y[0])
        }
        for(let obj of this.textStack){
            obj.update(this.x[0], this.y[0])
        }
    }
}




