<!DOCTYPE HTML>
<HTML lang="es">
    <HEAD>
        <META charset="utf-8"/>
        <TITLE>Fryntiz Desarrollador WEB</TITLE>
        <META name="description" content="Fryntiz Desarrollador de aplicaciones WEB, página oficial"/>
        <META name="keywords" content="curriculum, fryntiz, programador, desarrollador, página web, web, online, curriculum online, desarrollador web, sitio web, raul, raul caro pastorino, Raúl Caro Pastorino, Raúl, Raúl Caro, Caro Pastorino, web developer, developer, crear página, crear página web, hacer página web"/>
        <META name="author" content="Raúl Caro Pastorino"/>
<!--Metaetiquetas para Facebook-->
        <META property="og:title" content="Fryntiz Desarrollador WEB"/>
        <META property="og:description" content="Sitio WEB Oficial de Raúl Caro Pastorino (Fryntiz)" />
        <META property="og:image" content="./images/LogoFryntiz.png"/>
<!--Metaetiquetas para Twitter-->
        <META name="twitter:title" content="Fryntiz Desarrollador WEB"/>
        <META name="twitter:description" content="Sitio WEB Oficial de Raúl Caro Pastorino (Fryntiz)" />
        <META name="twitter:image:src" content="./images/LogoFryntiz.png"/>
        <META name="twitter:site" content="@fryntiz"/>
        <META name="twitter:creator" content="@fryntiz"/>
<!--Metaetiquetas para Google+-->
        <LINK href="https://plus.google.com/109655402661721084499/posts" rel="author"/>
        <LINK href="https://plus.google.com/109655402661721084499" rel="publisher"/>
        <META itemprop="name" content="Fryntiz Desarrollador WEB"/>
        <META itemprop="description" content="Sitio WEB Oficial de Raúl Caro Pastorino (Fryntiz)" />
        <META itemprop="image" content="./images/LogoFryntiz.png"/>
<!--Enlaces de archivos que componen el sitio-->
        <LINK rel="shortcut icon" href="./images/favicon.png"/>
        <LINK rel="stylesheet" href="./CSS/styles.css"/>
        <LINK rel="stylesheet" href="./CSS/titulo.css"/>
        <LINK rel="stylesheet" href="./CSS/contenido.css"/>
        <LINK rel="stylesheet" href="./CSS/footer.css"/>
        <SCRIPT src="JS/scripts.js"></SCRIPT>
    </HEAD>

    <BODY OnLoad="generadorBinario()">
        <DIV>
            <?php
                require "titulo.php";
                require "contenido.php";
            ?>
        </DIV>

            <?php
                require "footer.php";
            ?>
    </BODY>
</HTML>
