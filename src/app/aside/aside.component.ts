import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [ServiceData]
})

export class AsideComponent implements OnInit {
  private datos:ServiceData;
  private contact:string;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo nombre de los menús
    this.contact = _ServiceData.getMenubar().contact;
    
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getAside();
  }

  ngOnInit() {
  }

}
