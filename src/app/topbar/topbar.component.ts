import { Component, OnInit } from '@angular/core';

// Librería para acceder a cookies
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [ './topbar.component.css' ],
  providers: [ CookieService ]
})
export class TopbarComponent implements OnInit {

  constructor( private cookieService:CookieService ) { }

  ngOnInit() {
  }

  /**
   * Cambia el lenguaje seteando el valor en la cookie y recargando la página
   * actual donde se encuentra.
   * @param  lang Recibe una cadena con el idioma a establecer.
   */
  language(lang:string) {
    if (( lang !== '' )) {
      this.cookieService.set( 'lang', lang, 30 );
    }
    window.location.reload();
    //window.location.assign(window.location.href)
  }
}
