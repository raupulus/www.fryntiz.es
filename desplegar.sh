#!/usr/bin/env bash
# -*- ENCODING: UTF-8 -*-
##
## @author     Raúl Caro Pastorino
## @copyright  Copyright © 2018 Raúl Caro Pastorino
## @license    https://wwww.gnu.org/licenses/gpl.txt
## @email      dev@fryntiz.es
## @web        https://fryntiz.es
## @gitlab     https://gitlab.com/fryntiz
## @github     https://github.com/fryntiz
## @twitter    https://twitter.com/fryntiz
##
##             Guía de estilos aplicada:
## @style      https://github.com/fryntiz/Bash_Style_Guide

VERSION="0.0.1"
WORKSCRIPT="$PWD"
USER=$(whoami)
APACHECONF='/etc/apache2/sites-available'  ## Donde guarda conf de apache

URL1='fryntiz.es'  ## Primera url sin www
URL2='www.fryntiz.es'  ## Segunda url con www
DIR_WEB='dist/fryntizweb'  ## Directorio publico

DIR_DESTINO="/var/www/html/Public/$URL2"  ## Ruta dónde se instalará
DIR_LOG="/var/log/apache2/$URL2"
SITECONF="${URL2}.conf"  ## Nombre del archivo conf para apache

##
## Establece permisos para el sitio virtual.
##
permisos() {
    echo 'Aplicando permisos y propietario www-data'
    sudo chown -R www-data:www-data "$DIR_DESTINO"
}

##
## Resuelve dependencias para funcionar.
##
dependencias() {
    echo 'Instalando dependencias'
    cd "$DIR_DESTINO" || exit 1
    sudo -u www-data npm install
}

##
## Configura el sitio virtual y/o el entorno.
##
configuraciones() {
    echo 'Aplicando configuraciones'

    echo 'Generando contendio con ng build --prod'
    cd "$DIR_DESTINO" || exit 1
    sudo -u www-data ng build --prod
}

##
## Agrega configuración para Virtual Host de apache y resuelve dependencias a él
##
apache() {
    echo 'Agregando configuración de Apache'
    ## Copio la configuración
    sudo cp "$DIR_DESTINO/$SITECONF" "$APACHECONF"

    ## Creo directorio para guardar logs
    if [[ ! -d "$DIR_LOG" ]]; then
        sudo mkdir -p "$DIR_LOG"
    fi

    ## Habilito el sitio
    sudo a2ensite "$URL2"
}

##
## Recarga servicios configurados para aplicar los cambios
##
recargarServicios() {
    echo 'Reiniciando servicios'
    sudo systemctl reload apache2
    sudo systemctl status apache2
}

##
## Configura un certificado para https con ssl mediante certbot
## Cuando la llamada al script recibe el parámetro "-y" se ejecuta sin preguntas
##
certificado() {
    if [[ -f '/usr/bin/certbot' ]]; then
        local SN=''

        if [[ "$1" = '-y' ]]; then
            SN='S'
        else
            read -p "¿Generar certificado ssl para https con certbot? → s/N" SN
        fi

        if [[ "$SN" = 's' ]] || [[ "$SN" = 'S' ]]; then
            sudo certbot --authenticator webroot --installer apache \
                -w "$DIR_DESTINO/$DIR_WEB" \
                -d "$URL1" -d "$URL2"
        fi
    else
        echo "No se ha configurado SSL porque cerbot no se encuentra instalado"
    fi
}

if [[ "$1" = '-p' ]]; then
    dependencias
elif [[ "$1" = '-d' ]]; then
    permisos
elif [[ "$1" = '-c' ]]; then
    configuraciones
elif [[ "$1" = '-a' ]]; then
    apache
    recargarServicios
elif [[ "$1" = '-s' ]]; then
    certificado "$1" "$2"
    recargarServicios
else
    echo "-d    Dependencias"
    echo "-p    Permisos"
    echo "-c    Configuraciones"
    echo "-a    Apache"
    echo "-s    Certificado SSL con Cerboot"
fi

exit 0
