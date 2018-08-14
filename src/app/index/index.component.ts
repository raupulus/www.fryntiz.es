import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ServiceData]
})
export class IndexComponent implements OnInit {
  private datos:ServiceData;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getIndex();
  }

  ngOnInit() {

  }

  public scrollTo(anchor) {
    document.getElementById(anchor).scrollIntoView();
  }
}
