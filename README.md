# WEB oficial fryntiz
**Dominio:** *[fryntiz.es](https://fryntiz.es "Página web oficial de Fryntiz")*

Repositorio donde almaceno la web principal de mi perfil profesional

Actualmente desarrollada en **Angular 6**

Utilizada como portal para mostrar y enlazar a proyectos, redes sociales y 
todos los aspectos en los que me involucro.

![Logo Fryntiz](src/assets/img/logotipo.png "Logo Fryntiz")

## Instalar dependencias npm

```bash
npm install
```

## Construir aplicación para producción

```bash
ng build --prod
```

## Abrir servidor con el desarrollo

```bash
ng serve
```

## Preparar apache

```bash
sudo chown -R www-data:www-data /var/www/public/www.fryntiz.es/dist/www.fryntiz.es
sudo find /var/www/public/www.fryntiz.es/dist/www.fryntiz.es -type f -exec chmod 644 {} \;
sudo find /var/www/public/www.fryntiz.es/dist/www.fryntiz.es -type d -exec chmod 775 {} \;

sudo cp /var/www/public/www.fryntiz.es/apache.conf /etc/apache2/sites-available/www.fryntiz.es.conf
sudo a2ensite www.fryntiz.es.conf

echo '127.0.0.1       fryntiz.es' | sudo tee -a /etc/hosts
echo '127.0.0.1       www.fryntiz.es' | sudo tee -a /etc/hosts

sudo systemctl reload apache2
```



## Posibles problemas

### Error: ENOSPC: System limit for number of file watchers reached, watch '/home/foldername/abcrypto/static'

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

