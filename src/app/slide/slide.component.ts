import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: [ './slide.component.css' ],
  providers: [ ServiceData ]
})

export class SlideComponent implements OnInit {
  private config;
  private slideConfig;
  private imageUrls;

  /*
    Información sobre el componente slide:
    https://www.npmjs.com/package/ng-simple-slideshow
  */

  constructor( private _ServiceData:ServiceData ) {
    // Obtengo los datos de Configuración
    this.config = _ServiceData.getConfig();

    // Obtengo la configuración para el slide
    this.slideConfig = _ServiceData.getSlide().config

    // Obtengo los datos directamente para el slide
    this.imageUrls = _ServiceData.getSlide().img;
  }

  ngOnInit() {}
}
