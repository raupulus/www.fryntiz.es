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
  public datos:ServiceData;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getHobbies();
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

    document.getElementById('barhobbies').style.borderBottom = '3px solid orange';
  }

  public scrollTo(anchor) {
    document.getElementById(anchor).scrollIntoView();
  }
}
