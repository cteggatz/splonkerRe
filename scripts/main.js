import {DebugInterface, createText} from "./debugInterface.js";
import { GameObject } from "./gameObject/gameObject.js";
import { GameText } from "./gameObject/userInterface.js";
import {Scene} from "./scenes/scene.js";

/*- options -*/
let debugMode = true;

// ---- canvas ----
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//*-------- central game --------*//
//time : manages frame rate and delta time
const time = {
    lastTime: Date.now(),
    dt: new Array(),
    fps: new Array(),

}
//scenes
const scenes = {
    title: new Scene(
        ctx,
        [], 
        [
            new GameText(
                "Splonker!", 
                ctx.canvas.width/2+80, 75, 150, 100, {
                    backgroundColor: "white",
                    textColor: "black"
                }),
            new GameText(
                "play",
                ctx.canvas.width/2+80, 200, 75, 100, {
                    backgroundColor: "white",
                    textColor: "black"
                })
        ],
        {w: 612, h:612},
        {
            background: document.getElementById("titleBackground"),
            border: "#1D3557"
        }
    )
}

// instance : the central works of the game, helps renders everything
const instance = {
    scene: scenes.title,
    stack: new Array()
}
//debug
if(debugMode == true){
    instance.stack.push(new DebugInterface( 
            [
                createText('Delta Time', time.dt),
                createText('fps', time.fps),
            ]))
}




// -------- game functions --------
//runs game
function gameLoop(callback){
    time.dt[0] = callback - time.lastTime;
    time.lastTime = callback;
    time.fps[0] = Math.trunc(1 / (time.dt[0] / 1000));

    /* ---- update ----*/
    for(let obj of instance.stack){
        obj.update(ctx)
    }
    instance.scene.update(ctx);
    /* ---- drawing ---- */
    ctx.clearRect(0,0, ctx.canvas.height, ctx.canvas.width)
    instance.scene.draw(ctx);
    for(let obj of instance.stack){
        obj.draw(ctx)
    }
    
    requestAnimationFrame(gameLoop);
}

// ---- document initialization ----
window.onresize = function() {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
} 
//input handling
window.onclick = function(){
    
}
window.onkeydown = function(){
    
}
window.onload = function () {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;  

    requestAnimationFrame(gameLoop);
}

