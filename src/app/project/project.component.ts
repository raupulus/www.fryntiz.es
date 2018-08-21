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
  public datos;

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para los proyectos
    this.datos = _ServiceData.getProjects();
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

    document.getElementById('barprojects').style.borderBottom = '3px solid orange';
  }

  linkTo(url:string) {
    window.open(url, '_blank');
  }
}
