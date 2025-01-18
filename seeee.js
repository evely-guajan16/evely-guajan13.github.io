function calcularCono() {

    const radio = parseFloat(document.getElementById('radio').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const generatriz = parseFloat(document.getElementById('generatriz').value);


    if (isNaN(radio) || isNaN(altura) || isNaN(generatriz)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const volumen = (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;

    const area = Math.PI * radio * (radio + generatriz);

    document.getElementById('volumen').textContent = volumen.toFixed(2);
    document.getElementById('area').textContent = area.toFixed(2);
}

function borrarCampos() {
    document.getElementById('radio').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('generatriz').value = '';

    document.getElementById('volumen').textContent = '-';
    document.getElementById('area').textContent = '-';
}
