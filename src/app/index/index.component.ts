import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

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
                  pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12";
              } else {
                  pb.vistaBotones = false;
                  pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
              }
          },
          ocultarBotonera: function() {
              if (window.matchMedia("(max-width:767px)").matches) {
                  pb.vistaBotones = false;
                  pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
              }
          }
        }
        mb.inicioMovil();
    }, 100);
  }

}
