import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  providers: [ServiceData]
})
export class ProyectComponent implements OnInit {
  private datos;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para los proyectos
    this.datos = _ServiceData.getProyect();
  }

  ngOnInit() {

  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }
}
