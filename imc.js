const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener("click", () => {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value

    if(isNaN(altura) || isNaN(peso)){
        alert("Preencha os campos corretamente")
        return;
    }else{
        if(nome !== "" && altura !== "" && peso !== ""){
            const res = peso / (altura * altura);
            if(res < 18){
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com Magreza! </br>Procure um médico!`
            }else if(res <= 24.9){
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com peso normal! </br>Parabéns!`
            }else if(res <= 29.9){
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com sobrepeso! </br>Isso pode ser um alerta, tome cuidado!`
            }else if(res <= 34.9){
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com obesidade de grau I! </br>Procure um médico!`
            }else if(res <= 39.9){
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com obesidade de grau II! </br>Procure um médico, você corre RISCO!`
            }else{
                resultado.innerHTML = `Olá ${nome} seu IMC é ${res.toFixed(2)}, você está classificado com obesidade de grau III! </br>Procure um médico com URGÊNCIA!!! Você corre risco de morte!`
            }
        }else{
            alert("Preencha todos os dados para continuar!")
        }
    }
})