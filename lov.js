function calcular() {
    var radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un valor válido para el radio.");
        return;
    }

    var area = Math.PI * Math.pow(radio, 2);

    var circunferencia = 2 * Math.PI * radio;

    document.getElementById('area').innerText = area.toFixed(2);
    document.getElementById('circunferencia').innerText = circunferencia.toFixed(2);
}
function borrarCampos() {
    document.getElementById('radio').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('generatriz').value = '';

    document.getElementById('volumen').textContent = '-';
    document.getElementById('area').textContent = '-';
}
