import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [ServiceData]
})
export class JobsComponent implements OnInit {
  private datos:ServiceData;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getJobs();
  }

  ngOnInit() {
  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }
}
