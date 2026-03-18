// window.alert("Esta é uma mensagem de alerta");
console.log("Esta é uma mensagem de log");

var entrada = prompt("Qual sua idade?");

console.log("a sua idade é " + entrada + " anos");
// console.log("a sua idade é " + String(parseInt(entrada)) + 12 + " anos");


if(entrada > 18){
    console.log ("Você é maior de idade");
}
else if(entrada === "18"){
    console.log("Voce tem exatamente 18 anos");
}
else{
    console.log("Voce é menor de idade")
}
