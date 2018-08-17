import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

// Librería para acceder a cookies
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [ServiceData, CookieService]
})

export class AsideComponent implements OnInit {
  public datos:ServiceData;
  public contact:string;
  private tags = [
    'Html5', 'Javascript', 'CSS', 'Php', 'Ajax', 'Shell Script', 'Python',
    'jQuery', 'MySQL', 'Sqlite', 'PostgreSQL', 'JSON', 'Xml', 'Angular',
  ];

  constructor( private _ServiceData:ServiceData,
               private cookieService:CookieService ) {
    // Obtengo nombre de los menús
    this.contact = _ServiceData.getMenubar().contact;

    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getAside();
  }

  ngOnInit() {
    // Mezclar contenido del array
    this.tags = this.tags.sort(function() {
      return Math.random() - 0.5
    });
  }

  /**
   * Devuelve el array de etiquetas mezcladas
   * @return Array de etiquetas
   */
  public getTags() {
    return this.tags;
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
