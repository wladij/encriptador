const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const informacion = document.querySelector(".informacion");
const btnEncriptador = document.querySelector(".btn-encriptar");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEcriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEcriptado = stringEcriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEcriptado.includes(matrizCodigo[i][0])) {
            stringEcriptado = stringEcriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEcriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptado
}


function copiarTexto() {
    
    var campoTexto = mensaje;
    
    campoTexto.focus();
    campoTexto.select();
    campoTexto.setSelectionRange(0, 99999); 

    document.execCommand("copy");

}





    function validateText() {
        const text = textArea.value;
        const hasUppercase = /[A-Z]/.test(text);
        const hasAccents = /[áéíóúÁÉÍÓÚ]/.test(text);
        

        if (hasUppercase || hasAccents ) {
            informacion.classList.add('error');
            btnEncriptador.disabled = true;
        } else {
            informacion.classList.remove('error');
            btnEncriptador.disabled = false;
        }
    }

        

    textArea.addEventListener('input', validateText);
