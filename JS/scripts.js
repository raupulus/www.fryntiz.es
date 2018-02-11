function rellenarAptitudes() {
    var tecnologias = document.getElementById('hab_tecnologias');
    var aptitudes = document.getElementById('hab_aptitudes');

    var list_tecnologias = [
        'html5',
        'javascript',
        'css',
        'php',
        'ajax',
        'jQuery',
        'mysql',
        'sqlite',
        'postgreSQL',
        'json',
        'xml',
    ];

    // Mezclar contenido del array
    list_tecnologias = list_tecnologias.sort(function() {
        return Math.random() - 0.5
    });

    var list_aptitudes = [
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

    // Mezclar contenido del array
    list_aptitudes = list_aptitudes.sort(function() {
        return Math.random() - 0.5
    });

    // Rellena Tecnologías
    for (let tec of list_tecnologias) {
        var parr = document.createElement('p');
        var txt = document.createTextNode(tec);
        parr.append(txt);

        tecnologias.append(parr);
    }

    // Rellena Aptitudes
    for (let tec of list_aptitudes) {
        var parr = document.createElement('p');
        var txt = document.createTextNode(tec);
        parr.append(txt);

        aptitudes.append(parr);
    }
}

/**
 * Scripts ejecutados al cargar la página
 */
function iniciar() {
    rellenarAptitudes();
}

window.onload = iniciar;
