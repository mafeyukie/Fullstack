var numeroGerado = Math.floor(Math.random()*100)+1;

console.log(numeroGerado);


function VerificarNumero(){
    var numeroAdivinhado = document.getElementById("tentandoAdivinhar").value;

    if (numeroAdivinhado == numeroGerado){
        window.alert("VOCE ACERTOU!!")
        document.getElementById("tentandoAdivinhar").style.setProperty("background-color","green");

    }else{
        window.alert("VOCE ERROU");
        document.getElementById("tentandoAdivinhar").style.setProperty("background-color","red");

    }
}