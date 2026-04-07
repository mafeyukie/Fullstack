let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// retângulosborda
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,400,400);
ctx.closePath();

// retângulosvermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,60,60);
ctx.closePath();

// retângulosazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(340,0,60,60);
ctx.closePath();

// circuloaqua
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(200,150,20,1.5*Math.PI,4.0*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linhaazul
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(60,60)
ctx.lineTo(200,200)
ctx.stroke()
ctx.closePath();

// linhavermelha
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(200,200)
ctx.lineTo(360,40)
ctx.stroke()
ctx.closePath();


// circulomeialuaverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,80,1.0*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

// linhavermelha
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0,202)
ctx.lineTo(20000,100)
ctx.stroke()
ctx.closePath();

// circulomeialuaverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,95,1.0*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

// circulomeialuaverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,95,1.75*Math.PI,2.0*Math.PI);
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",200,60);
ctx.closePath();

// retângulosazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,203,30,30);
ctx.closePath();

// retângulosazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,171,30,30);
ctx.closePath();

// retângulosvermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(354,201,50,20);
ctx.closePath();

// retângulosvermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(354,179,50,20);
ctx.closePath();

// retângulosvermelhomeio
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(150,202,50,50);
ctx.closePath();
