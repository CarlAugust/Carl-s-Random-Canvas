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

function cosWave(k, x, m, a) {
    return Math.cos(k * x+ m)*a
}

function tanWave(k,x,m,a) {
    return Math.tan(k * x + m) * a
}

function cotWave(k,x,m,a) {
    return 1/(Math.tan(k*x+m)*a)
}

let x = 0;
let y = 0;
let speed = 10;
let m = 0


function animate(){

    requestAnimationFrame(animate);
    c.beginPath();

    for (let i = 0; i < cX; i++) {
        c.lineTo(tanWave(20, x, m, 2) + cX, cosWave(10, y, m, 1000) + cY , 1, 1, false);      
        x += 1;
        y += 1;
    }

    c.clearRect(0, 0, cX * 2, cY * 2);
    c.stroke();
    x = 0;
    m += 0.3
    console.log("f");
}

function doStuff() {
    console.log("hello!");
    setTimeout(doStuff, 1000);
 }

setTimeout(doStuff, 1000);
animate();

