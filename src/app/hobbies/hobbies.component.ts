import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
  providers: [ServiceData]
})
export class HobbiesComponent implements OnInit {
  private datos:ServiceData;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getHobbies();
  }

  ngOnInit() {
  }

  public scrollTo(anchor) {
    document.getElementById(anchor).scrollIntoView();
  }
}
