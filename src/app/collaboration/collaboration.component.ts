import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css'],
  providers: [ServiceData]
})
export class CollaborationComponent implements OnInit {
  private config:ServiceData;
  private datos:ServiceData;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos de Configuración
    this.config = _ServiceData.getConfig();

    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getCollaboration();
  }

  ngOnInit() {
  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }

}
