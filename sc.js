function calcular() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var ladoA = parseFloat(document.getElementById('ladoA').value);
    var ladoB = parseFloat(document.getElementById('ladoB').value);
    var ladoC = parseFloat(document.getElementById('ladoC').value);

    var area = (base * altura) / 2;

    var perimetro = ladoA + ladoB + ladoC;

    document.getElementById('area').innerText = area.toFixed(2);
    document.getElementById('perimetro').innerText = perimetro.toFixed(2);
}

function borrarCampos() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('ladoA').value = '';
    document.getElementById('ladoB').value = '';
    document.getElementById('ladoC').value = '';
    document.getElementById('area').textContent = '-';
    document.getElementById('preimetro').textContent = '-';
}
