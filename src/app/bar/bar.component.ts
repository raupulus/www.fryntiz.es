import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [ServiceData]
})
export class BarComponent implements OnInit {

    // Variable con los datos recibidos del JSON
    public config;
    public datos;
    public index;
    public projects;
    public collaboration;
    public hobbie;
    public curriculum;
    public jobs;
    public contact;

  constructor(private _ServiceData:ServiceData) {
      // Obtengo los datos de Configuración
      this.config = _ServiceData.getConfig();

      // Obtengo los datos directamente para el menú
      this.datos = _ServiceData.getMenubar();

      // Establezco valores
      this.index=this.datos['index'];
      this.projects=this.datos['projects'];
      this.collaboration=this.datos['collaboration'];
      this.hobbie=this.datos['hobbie'];
      this.curriculum=this.datos['curriculum'];
      this.jobs=this.datos['jobs'];
      this.contact=this.datos['contact'];

    // Si se trae por ajax hay que convertir a objetos:
    // El método "subscribe()" captura respuesta del observable mapeado
    /*
    this._ServiceData.getData().subscribe(
      resultado => {
        this.datos = resultado.menubar['es']; // Obtener idioma de cookie
        //console.log('this.datos', this.datos);
        this.index=this.datos['index'];
        this.project=this.datos['project'];
        this.collaboration=this.datos['collaboration'];
        this.hobbie=this.datos['hobbie'];
        this.contact=this.datos['contact'];
        this.curriculum=this.datos['curriculum'];
      },
      error => {
        let msg = <any>error;
      }
    );
    */
  }

  ngOnInit() {
      setTimeout(()=>{
        var pb = {
          botonMovil: document.querySelector("#btnMovil span"),
          vistaBotones: false,
          botonera: document.querySelector("nav"),
          botones: document.querySelectorAll("nav ul li a")
        }

        var mb = {
          inicioMovil: function() {
              pb.botonMovil.addEventListener("click", mb.mostrarBotonera)
              for (var i = 0; i < pb.botones.length; i++) {
                  pb.botones[i].addEventListener("click", mb.ocultarBotonera);
              }
          },
          mostrarBotonera: function() {
              if (!pb.vistaBotones) {
                  pb.vistaBotones = true;
                  pb.botonera.className = "col-lg-7 col-md-12 col-sm-12 col-xs-12";
              } else {
                  pb.vistaBotones = false;
                  pb.botonera.className = "col-lg-7 col-md-12 col-sm-12 col-xs-0";
              }
          },
          ocultarBotonera: function() {
              if (window.matchMedia("(max-width:767px)").matches) {
                  pb.vistaBotones = false;
                  pb.botonera.className = "col-lg-7 col-md-12 col-sm-12 col-xs-0";
              }
          }
        }
        mb.inicioMovil();
    }, 100);
  }

}
