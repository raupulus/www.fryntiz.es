import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // Nombre de la etiqueta html personalizada
  templateUrl: './app.component.html', // Vista HTML para el componente
  styleUrls: ['./app.component.css']   // Estilos CSS para el componente 
})

// Exporto la clase con el nombre que declaro en el APP MODULE
export class AppComponent {
  title = 'app';
}
