let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// retangulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fillRect(0,260,400,150);
ctx.closePath();

// retanguloazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 132, 255, 1)';
ctx.fillRect(0,260,50,150);
ctx.closePath();


// retanguloazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 132, 255, 1)';
ctx.fillRect(0,350,150,50);
ctx.closePath();

// circuloazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 132, 255, 1)';
ctx.moveTo(150,400)
ctx.arc(150,400,50,1.5*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath();

// circuloazul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 132, 255, 1)';
ctx.moveTo(0,260)
ctx.arc(0,260,50,1.5*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath();


// troncomarrom
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(50,140,30,120);
ctx.closePath();


// circuloverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(65,160,40,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.closePath();


// retangulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(160,160,100,100);
ctx.closePath();

// telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.moveTo(160,160)
ctx.lineTo(160+50,160-50)
ctx.lineTo(260,160)
ctx.fill();
ctx.closePath();

// retangulosjanela
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(45, 146, 241)';
ctx.fillRect(170,170,30,30);
ctx.closePath();


// retangulosjanela
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(45, 146, 241)';
ctx.fillRect(220,170,30,30);
ctx.closePath();


// retangulosporta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(71, 21, 21)';
ctx.fillRect(200,200,20,60);
ctx.closePath();



// circuloverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.arc(330,90,50,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.closePath();


// troncomarrom
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(330,200,30,130);
ctx.closePath();

// circuloverde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(345,230,40,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.closePath();