const canvas = document.querySelector('canvas')
let root = document.querySelector('.root')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const cX = canvas.width/2
const cY = canvas.height/2

c = canvas.getContext("2d");

function sinWave(k, x, m, a){
    return Math.sin(k * x + m) * a
}

let x = 0;
let speed = 10;
let m = 0


function animate(){

    requestAnimationFrame(animate);
    c.beginPath();
    c.lineWidth = 5;

    for (let i = 0; i < cX; i++) {
        c.lineTo(x, sinWave(0.02, x, m, 100) + cY, 1, 1);      
        x++;
    }

    c.clearRect(0, 0, cX * 2, cY * 2);
    c.stroke();
    m += 0.1;
    x = 0;
    console.log("f");
}

function doStuff() {
    console.log("hello!");
    setTimeout(doStuff, 1000);
 }

setTimeout(doStuff, 1000);
animate();

