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
  private tags = [
    'Html5', 'Javascript', 'CSS', 'Php', 'Ajax', 'Shell Script', 'Python',
    'jQuery', 'MySQL', 'Sqlite', 'PostgreSQL', 'JSON', 'Xml', 'Angular',
  ];

  constructor(private _ServiceData:ServiceData) {
    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getHobbies();
  }

  ngOnInit() {
    // Mezclar contenido del array
    this.tags = this.tags.sort(function() {
      return Math.random() - 0.5
    });
  }

  getTags() {
    return this.tags;
  }

  public scrollTo(anchor) {
    document.getElementById(anchor).scrollIntoView();
  }
}
