function calcular() {
    const lado = parseFloat(document.getElementById('lado').value);

    if (lado > 0) {
        const area = lado * lado;
        const perimetro = 4 * lado;


        document.getElementById('area').textContent = area.toFixed(2);
        document.getElementById('perimetro').textContent = perimetro.toFixed(2);
    } else {
        alert("Por favor, introduce un valor válido para el lado.");
    }
}

function borrarCampos() {
    document.getElementById('lado').value = '';
    ;

    document.getElementById('area').textContent = '-';
    document.getElementById('perimitro').textContent = '-';
}
