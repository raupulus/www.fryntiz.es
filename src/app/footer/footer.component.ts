import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ],
  providers: [ ServiceData ]
})
export class FooterComponent implements OnInit {
  public config;
  public contact;

  constructor( private _ServiceData:ServiceData ) {
    // Obtengo configuraciones de la aplicación
    this.config = _ServiceData.getConfig();

    // Obtengo nombre de contacto
    this.contact = _ServiceData.getMenubar().contact;
  }

  ngOnInit() {
  }
}
