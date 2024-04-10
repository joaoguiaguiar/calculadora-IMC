const btnCalcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (nome === '' || isNaN(altura) || isNaN(peso)) {
        alert('Preencha todos os campos corretamente');
    } else {
        let resultadoIMC = peso / (altura * altura);
        let mensagem = '';

        if (resultadoIMC < 18.5) {
            mensagem = 'abaixo do peso';
        } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
            mensagem = 'com peso normal';
        } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
            mensagem = 'com sobrepeso';
        } else {
            mensagem = 'com obesidade';
        }

        resultado.innerHTML = `${nome}, seu IMC é ${resultadoIMC.toFixed(2)}, você está ${mensagem}.`;
    }
}

btnCalcular.addEventListener('click', calcularIMC);
