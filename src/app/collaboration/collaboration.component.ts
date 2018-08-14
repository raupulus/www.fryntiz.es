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
    this.menuSelect();
  }

  /**
   * Marca la opción del menú seleccionada actualmente y limpia otras.
   * (TODO → Refactorizar función usada en cada sitio)
   */
  public menuSelect() {
    Array.from(
      document.querySelectorAll('#boxbar nav ul li a')
    ).forEach(
      function(ele, idx) {
        ele['style'].borderBottom = '3px solid #0069d9';
    });

    document.getElementById('barcollaboration').style.borderBottom = '3px solid orange';
  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }
}
