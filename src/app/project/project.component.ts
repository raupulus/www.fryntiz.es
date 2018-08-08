import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ServiceData]
})

export class ProjectComponent implements OnInit {
  private datos;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para los proyectos
    this.datos = _ServiceData.getProjects();
  }

  ngOnInit() {

  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }
}
