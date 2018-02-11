var ContadorSubtitulo = 0;

/**
 * Función para cambiar la imagen de la portada
 * @returns {number} Devuelve el número de la portada actual
 */
function cambiarPortada() {
    if (ContadorSubtitulo === 0) {
        document.getElementById('IMGsubtitulo').src = './images/PortadaB.png';
        return ++ContadorSubtitulo;
    } else if (ContadorSubtitulo === 1) {
        document.getElementById('IMGsubtitulo').src = './images/Portada.png';
        return --ContadorSubtitulo;
    }
}
