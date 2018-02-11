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

function nuevoCambiarPortada() {
    var lenguajes = [
        'html5',
        'javascript',
        'css',
        'php',
        'ajax',
        'jquery',
        'mysql',
        'sqlite',
        'postgreSQL',
        'json',
        'xml',
    ];

    var aptitudes = [
        'Edición de vídeos',
        'Animación 2D',
        'Diseño Vectorial',
        'Drupal',
        'Wordpress',
        'GNU/Linux',
        'Apache2',
        'Gestión DNS',
        'Gestión Hosting',
    ];
}
