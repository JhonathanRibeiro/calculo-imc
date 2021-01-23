const form = document.querySelector('#formid');

form.addEventListener('click', (e) => {
    e.preventDefault();
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Peso inválido!', false);
        return;
    }
    if (!altura) {
        setResult('Altura inválida!', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const indiceIMC = getIndiceIMC(imc);

    const msg = `Seu IMC é ${imc} (${indiceIMC})`;

    setResult(msg, true);
});

function getIndiceIMC(imc) {
    const indice = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if (imc >= 39.9) return indice[5];
    if (imc >= 34.9) return indice[4];
    if (imc >= 29.9) return indice[3];
    if (imc >= 24.9) return indice[2];
    if (imc >= 18.5) return indice[1];
    if (imc < 18.5) return indice[0];
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//criando um elemento(tag) p
function createParagraph(className) {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const res = document.querySelector('#res');
    res.innerHTML = '';
    const p = createParagraph();

    if (isValid) {
        p.classList.add('success');
    } else {
        p.classList.add('danger');
    }
    p.innerHTML = msg;
    res.appendChild(p);
}