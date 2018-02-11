/**
 * Rellena los bloques de habilidades/aptitudes de forma dinámica desde
 * los arrays con esta información. Esto se realiza tras cargar la página.
 */
function rellenarAptitudes() {
    var tecnologias = document.getElementById('hab_tecnologias');
    var aptitudes = document.getElementById('hab_aptitudes');
    var habilidades = document.getElementById('hab_habilidades');

    var listTecnologias = [
        'Html5',
        'Javascript',
        'Css',
        'Php',
        'Ajax',
        'Shell Script',
        'Python',
        'jQuery',
        'MySQL',
        'Sqlite',
        'PostgreSQL',
        'Json',
        'Xml',
    ];

    // Mezclar contenido del array
    listTecnologias = listTecnologias.sort(function() {
        return Math.random() - 0.5
    });

    // Rellena Tecnologías
    for (let tec of listTecnologias) {
        var parr = document.createElement('p');
        parr.append(document.createTextNode(tec));

        tecnologias.append(parr);
    }

    var listAptitudes = [
        'Rápido Aprendizaje',
        'Experiencia Colaborando',
        'Comprometido',
        'Amplia red de Contactos',
        'Original',
        'Muy Organizado',
        'Experimentador',
    ];

    // Mezclar contenido del array
    listAptitudes = listAptitudes.sort(function() {
        return Math.random() - 0.5
    });

    // Rellena Aptitudes
    for (let tec of listAptitudes) {
        var parr = document.createElement('p');
        parr.append(document.createTextNode(tec));

        aptitudes.append(parr);
    }

    var listHabilidades = [
        'Edición de vídeos',
        'Animación 2D',
        'Diseño Vectorial',
        'Drupal',
        'Wordpress',
        'GNU/Linux',
        'Apache2',
        'Gestión DNS',
        'Gestión Hosting',
        'Redes Sociales',
        'Samba/Cifs',
        'NAS',
        'Redes',
        'Debian GNU/Linux',
        'Electricidad',
        'Micro-electrónica',
        'Hardware',
    ];

    // Mezclar contenido del array
    listHabilidades = listHabilidades.sort(function() {
        return Math.random() - 0.5
    });

    // Rellena Aptitudes
    for (let tec of listHabilidades) {
        var parr = document.createElement('p');
        parr.append(document.createTextNode(tec));

        habilidades.append(parr);
    }
}

/**
 * Scripts ejecutados al cargar la página
 */
function iniciar() {
    rellenarAptitudes();
}

window.onload = iniciar;
