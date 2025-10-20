import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePersonajePage } from './detalle-personaje.page';  // Importa el componente standalone

@NgModule({
  imports: [
    CommonModule,
    DetallePersonajePage  // Asegúrate de que no lo declares, solo impórtalo
  ]
})
export class DetallePersonajePageModule {}
