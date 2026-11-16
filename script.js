function upDate(previewPic) {
    const image = document.getElementById('image');
    image.textContent = previewPic.alt;
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.classList.add('showing');
}

function unDo() {
    const image = document.getElementById('image');

    image.style.backgroundImage = "url('')";
    image.textContent = 'Pasa el ratón o enfoca una imagen para verla aquí.';
    image.classList.remove('showing');
}

// Se ejecuta al terminar de cargar la página mediante onload.
function agregarTabindex() {
    console.log('onload activado: añadiendo tabindex a las seis imágenes.');
    const imagenes = document.querySelectorAll('.preview');
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute('tabindex', '0');
    }
}
