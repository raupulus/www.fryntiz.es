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
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

// Librería para poder utilizar rxjs
import { Observable } from 'rxjs';

// Defino decorador inyectable
@Injectable()

// Exporto la clase con el servicio creado para suministrar datos
export class ServiceData {
    public lang:string = 'en'; //Obtener este valor mediante cookie
    public url:string = 'assets/json/data.json';
    private _data;

    constructor(private _http:Http) {
        // Traigo datos AJAX
        //this._data = this._http.get(this.url).pipe(map(resultado => resultado.json()));
        //Traigo datos directamente
        this._data = require('../assets/json/data.json');
    }

    getConfig() {
        return this._data.config;
    }

    /**
     * Devuelvo un objeto de elementos para el menú según el idioma establecido
     * @return Object Objetco con los elementos del menú.
     */
    getMenubar() {
        return this._data.menubar[this.lang];
    }

    getSlide() {
        return this._data;
    }

    getProyect() {
        return this._data;
    }

    getCollaboration() {
        return this._data;
    }

    getHobbie() {
        return this._data;
    }

    getContact() {
        return this._data;
    }
}
