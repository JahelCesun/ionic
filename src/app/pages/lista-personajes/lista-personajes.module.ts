import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonajesPage } from './lista-personajes.page';  // Importa el componente standalone

@NgModule({
  imports: [
    CommonModule,
    ListaPersonajesPage  // Importa el componente standalone aquí
  ]
})
export class ListaPersonajesPageModule {}
