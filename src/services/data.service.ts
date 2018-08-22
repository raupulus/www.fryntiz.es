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

// Quita el error al obtener json con require, esto no es correcto hacerlo
// pero quedará así temporalmente.
declare var require: any;

// Defino decorador inyectable
@Injectable()

// Exporto la clase con el servicio creado para suministrar datos
export class ServiceData {
  public lang:string;
  private config;
  private menubar;
  private aside;
  private index;
  private slide;
  private projects;
  private collaborations;
  private jobs;
  private contact;
  private hobbies;

  /**
   * Constructor del servicio
   * @param cookieService Objeto de proveedor de datos para cookies
   */
  constructor(private cookieService: CookieService/*private _http:Http*/) {
    // Traigo datos directamente
    //this.data = require( '../assets/json/data.json' );
    this.config = require( '../assets/json/config.json' );
    this.menubar = require( '../assets/json/menubar.json' );
    this.aside = require( '../assets/json/aside.json' );
    this.index = require( '../assets/json/index.json' );
    this.slide = require( '../assets/json/slide.json' );
    this.projects = require( '../assets/json/projects.json' );
    this.collaborations = require( '../assets/json/collaborations.json' );
    this.jobs = require( '../assets/json/jobs.json' );
    this.contact = require( '../assets/json/contact.json' );
    this.hobbies = require( '../assets/json/hobbies.json' );

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
           this.menubar[this.lang] === undefined) {
        this.lang = 'es';
        this.cookieService.set( 'lang', 'es', 30 );
    }

    return this.lang;
  }

  setLang(lang:string) {
    if (( lang !== '' )) {
      this.cookieService.set( 'lang', lang, 30 );
    }
    return this.getLang();
  }

  getConfig() {
    return this.config;
  }

  /**
   * Devuelvo un objeto de elementos para el menú según el idioma establecido
   * @return Object Objeto con los elementos del menú.
   */
  getMenubar() {
    return this.menubar[this.lang];
  }

  getIndex() {
    return this.index[this.lang];
  }

  getSlide() {
    return this.slide;
  }

  getProjects() {
    return this.projects[this.lang];
  }

  getCollaboration() {
    return this.collaborations[this.lang];
  }

  getHobbies() {
    return this.hobbies[this.lang];
  }

  getJobs() {
    return this.jobs[this.lang];
  }

  getContact() {
      return this.contact[this.lang];
  }

  getAside() {
      return this.aside[this.lang];
  }
}
