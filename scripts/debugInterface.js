//desplayes debuging information needed
export class DebugInterface {
    constructor(stack) {
      this.stack = stack;
    }
    //draws every text in _stack
    draw(ctx) {
      ctx.font = "10px Georgia";
      for (let i = 0; i<this.stack.length; i++) {
        ctx.fillStyle = 'red';
        ctx.fillText(`${this.stack[i].text}: ${this.stack[i].value}`,5, 12+i*12);
      }
      ctx.fillStyle = "white"
    }
    update() {
      
    }
  
  }
  //creates a label -> new String(text + ": " + value);
  export function createText(text, value) {
    return { text: text, value: value };
  }
  export default DebugInterface;