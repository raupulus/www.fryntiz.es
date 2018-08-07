/*
 * Este servicio se encargará de hacer como una API accediendo a la información
 * en JSON y a través de la inyección de dependencias se enviará esa información
 * a los componentes.
 */

// Decorador que permite la inyección de dependencias en los componentes
import { Injectable } from '@angular/core';

// Módulo para realizar peticiones HTTP
//import { Http, Response, Headers } from '@angular/http';
import { Http } from '@angular/http';

// Librería para mapear respuestas HTTP
import { map } from 'rxjs/operators';

// Librería para poder utilizar rxjs
import { Observable } from 'rxjs';

// Librería para acceder a cookies
import { CookieService } from 'ngx-cookie-service';

// Defino decorador inyectable
@Injectable()

// Exporto la clase con el servicio creado para suministrar datos
export class ServiceData {
    public lang:string;
    public url:string = 'assets/json/data.json';
    private data;

    /**
     * Constructor del servicio
     * @param cookieService Objeto de proveedor de datos para cookies
     */
    constructor(private cookieService: CookieService/*private _http:Http*/) {
        // Traigo datos directamente
        this.data = require( '../assets/json/data.json' );

        // Obtengo idioma para los datos
        this.getLang();

        // Traigo datos AJAX
        //this.data = this._http.get(this.url).pipe(map(resultado => resultado.json()));
    }

    /**
     * Comprueba si la cookie existe para obtener su valor o establece por
     * defecto el valor inglés "es"
     * @return String Devuelve el idioma establecido.
     */
    getLang() {
        // Compruebo si la cookie está creada para obtener su valor
        if ( this.cookieService.check('lang') ) {
            this.lang = this.cookieService.get( 'lang' );
        }

        // Comprueba que el idioma es válido y existe al menos para el menú.
        if ( ( this.lang === undefined ) ||
               this.data.menubar[this.lang] === undefined) {
            this.lang = 'en';
            this.cookieService.set( 'lang', 'en', 30 );
        }

        return this.lang;
    }

    getConfig() {
        return this.data.config;
    }

    /**
     * Devuelvo un objeto de elementos para el menú según el idioma establecido
     * @return Object Objeto con los elementos del menú.
     */
    getMenubar() {
        return this.data.menubar[this.lang];
    }

    getSlide() {
        return this.data.slide;
    }

    getProyect() {
        return this.data.proyect[this.lang];
    }

    getCollaboration() {
        return this.data.collaboration[this.lang];
    }

    getHobbie() {
        return this.data.hobbie[this.lang];
    }

    getContact() {
        return this.data.contact[this.lang];
    }
}
