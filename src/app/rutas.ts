// Envoltura alrededor de un módulo que incluye también los proveedores.
import { ModuleWithProviders } from '@angular/core';

/*
El router angular es un servicio opcional que presenta una vista de componente particular para una determinada URL.
No es parte del núcleo angular.
Es su propio paquete de biblioteca, @angular/router lo que necesita de ella.
*/
import { Routes, RouterModule } from '@angular/router';

// Importo los componentes
import { IndexComponent } from "./index/index.component";
import { ContactComponent } from "./contact/contact.component";
import { ProyectComponent } from './proyect/proyect.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

// Asocio palabras con rutas a componentes
const appRoutes: Routes = [
    {path: "", component: IndexComponent, pathMatch: 'full'},
    {path: "index", component: IndexComponent},
    {path: "contact", component: ContactComponent, data: { title: 'Contacto' }},
    {path: "proyect", component: ProyectComponent, data: { title: 'Proyectos' }},
    {path: "collaboration", component: CollaborationComponent, data: { title: 'Colaboraciones' }},
    {path: "hobbies", component: HobbiesComponent, data: { title: 'Hobbies' }},
    {path: "**", component: IndexComponent},
];

// Exporto constante de objetos para cualquier tipo
export const appRoutingProviders: any[] = [];

// Constante de tipo ModuleWithProviders con el valor del objeto RouterModule utilizando el método forRoot con el parámetro de la ruta que nosotros indicamos en el appRoutes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
