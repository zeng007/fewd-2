
// initialize ctx
//get(0) get the function
let canvas = $('#big-canvas').get(0);
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
let ctx = canvas.getContext('2d');

// for more ctx functions, check out this article
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

// set colors
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';

// set some variables
let rectangleWidth = 400;
let rectangleHeight = 200;

// draw rectangles
ctx.fillRect(100, 400, rectangleWidth, rectangleHeight);
ctx.strokeRect(200, 300, rectangleWidth, rectangleHeight);

// draw triangle thing
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 300);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();

// change fill color
ctx.fillStyle = 'blue';

// draw circle
ctx.beginPath();
ctx.arc(300, 200, 100, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
