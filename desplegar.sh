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
WORKSCRIPT=$PWD
USER=$(whoami)
APACHECONF='/etc/apache2/sites-available'
DIR_DESTINO='/var/www/html/Public/www.fryntiz.es'  ## Ruta dónde se instalará
SITECONF='www.fryntiz.es.conf'  ## Nombre del archivo conf para apache

permisos() {
    sudo chown -R www-data:www-data "$DIR_DESTINO"
}

dependencias() {
    cd "$DIR_DESTINO" || exit 1
    sudo -u www-data npm install
}

configuraciones() {

}

apache() {
    ## Copio la configuración
    sudo cp "$DIR_DESTINO/$SITECONF" "$APACHECONF"

    ## Creo directorio para guardar logs
    sudo mkdir -p /var/log/apache2/www.fryntiz.es

    ## Habilito el sitio
    sudo a2ensite www.fryntiz.es
}


##
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
                -w /var/www/html/Publico/www.fryntiz.es/public \
                -d www.fryntiz.es -d apuntes.laguialinux.es
        fi
    fi
}

permisos
dependencias
configuraciones
apache

sudo systemctl reload apache2
certificado "$1"
sudo systemctl reload apache2
sudo systemctl status apache2

exit 0
