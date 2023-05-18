const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const contenedorsubtitulo = document.querySelector(".contenedor-subtitulo");
const contenedorparrafo = document.querySelector(".contenedor-parrafo");

copia.style.display = "none";
textA.focus();

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    if (textoEncriptado.length === 0 || /^\s+$/.test(textoEncriptado)) {
        textA.focus();
        swal.fire({
            icon: "info",
            iconColor: "#0a3871",
            background: "#373739",
            title: "¡No hay texto!",
            confirmButtonColor: "#0a3871",
            text: "Escriba el texto que desea encriptar en el campo disponible."
        });
        textArea.value = "";
    } else if (/[^a-z ]/.test(textoEncriptado)) {
        textA.focus();
        swal.fire({
            icon: "info",
            iconColor: "#0a3871",
            background: "#373739",
            title: "¡Error!",
            confirmButtonColor: "#0a3871",
            text: "Solo se puede escribir letras minúsculas y sin acentos."
        });
        textArea.value = "";
    } else {
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textArea.value = "";
        textA.focus();
        copia.style.display = "block";
        mensaje.style.display = "block";
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    if (textoDesencriptado.length === 0 || /^\s+$/.test(textoDesencriptado)) {
        textA.focus();
        swal.fire({
            icon: "info",
            iconColor: "#0a3871",
            background: "#373739",
            title: "¡No hay texto!",
            confirmButtonColor: "#0a3871",
            text: "Escriba el texto que desea encriptar en el campo disponible."
        });
        textArea.value = "";
    } else if (/[^a-z ]/.test(textoDesencriptado)) {
        textA.focus();
        swal.fire({
            icon: "info",
            iconColor: "#0a3871",
            background: "#373739",
            title: "¡Error!",
            confirmButtonColor: "#0a3871",
            text: "Solo se puede escribir letras minúsculas y sin acentos."
        });
        textArea.value = "";
    } else {
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textA.focus();
        mensaje.style.display = "block";
        copia.style.display = "block";
    }
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    textA.focus();
    mensaje.value = "";
    swal.fire({
        icon: "info",
        iconColor: "#0a3871",
        background: "#373739",
        title: "¡Texto copiado!",
        confirmButtonColor: "#0a3871",
        text: "Se ha copiado correctamente el texto."
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
}