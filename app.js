
let entrada;
let salida;
let reemplazosEncriptar = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
let texto;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function limpiarCaja() {
    document.querySelector('#entradaTexto').value = '';
}


function encriptar() {
    entrada = document.getElementById('entradaTexto').value;

    salida = entrada.replace(/[aeiou]/g, match => reemplazosEncriptar[match]);

    try {
        asignarTextoElemento('.texto_encriptado', salida);
        document.getElementById('muneco').remove();
        document.getElementById('mensage1').remove();
        document.getElementById('mensage2').remove();
        document.getElementById('texto_encriptado').removeAttribute('hidden');
        document.getElementById('botonCopiar').removeAttribute('hidden');
    } catch (error) {
        console.error(error);
    }

    limpiarCaja();
}


function desencriptar() {
    entrada = document.getElementById('entradaTexto').value;

    salida = entrada.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    try {
        asignarTextoElemento('.texto_encriptado', salida);
        document.getElementById('muneco').remove();
        document.getElementById('mensage1').remove();
        document.getElementById('mensage2').remove();
        document.getElementById('texto_encriptado').removeAttribute('hidden');
        document.getElementById('botonCopiar').removeAttribute('hidden');
    } catch (error) {
        console.error(error);
    }

    limpiarCaja();
}


function copiar() {
    texto = document.getElementById('texto_encriptado').innerHTML;

    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles')
    }).catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    }) // Fuente: https://midu.dev/leer-copiar-pegar-portapapeles-javascript/
    window.alert("El texto ha sido copiado");
}


