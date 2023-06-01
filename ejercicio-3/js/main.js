
let btn = document.getElementById("boton");

btn.addEventListener("click", ()=> {
    let valorOperacion = document.getElementById("operacion").value;
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;

    let resultado = 0;
    if (valorOperacion == 1){
        document.getElementById('resultado').innerHTML= parseInt(valor1) + parseInt(valor2)
    }else if(valorOperacion == 2){
        resultado = parseInt(valor1) - parseInt(valor2);
        document.getElementById("resultado").innerHTML=resultado;
    }else if(valorOperacion == 3){
        resultado = parseInt(valor1) * parseInt(valor2);
        document.getElementById("resultado").innerHTML=resultado;
    }else{
        resultado = parseInt(valor1) / parseInt(valor2);
        document.getElementById("resultado").innerHTML=resultado;
    }
    
})


