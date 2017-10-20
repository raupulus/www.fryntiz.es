var ContadorSubtitulo = 0;

function cambiarPortada() {
    if (ContadorSubtitulo == 0) {
        document.getElementById("IMGsubtitulo").src = "./images/PortadaB.png";
        return ++ContadorSubtitulo;
    }else if (ContadorSubtitulo == 1) {
        document.getElementById("IMGsubtitulo").src = "./images/Portada.png";
        return --ContadorSubtitulo;
    }
}
