import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-personajes',
    pathMatch: 'full'
  },
  {
    path: 'lista-personajes',
    loadChildren: () => import('./pages/lista-personajes/lista-personajes.module').then(m => m.ListaPersonajesPageModule)
  },
  {
    path: 'detalle-personaje/:id',
    loadChildren: () => import('./pages/detalle-personaje/detalle-personaje.module').then(m => m.DetallePersonajePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}