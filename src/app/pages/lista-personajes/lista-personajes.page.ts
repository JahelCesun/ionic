import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar *ngFor
import { IonicModule } from '@ionic/angular'; // Importar IonicModule para usar los componentes de Ionic

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.page.html',
  styleUrls: ['./lista-personajes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  // Asegúrate de importar ambos módulos
})
export class ListaPersonajesPage implements OnInit {

  personajes: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí puedes cargar la lista de personajes
    this.personajes = [
      { alias: 'Pikachu', nombre: 'Ash Ketchum' },
      { alias: 'Goku', nombre: 'Son Goku' }
    ];
  }

  verDetalle(index: number) {
    console.log("Ver detalle del personaje", index);
    this.router.navigate(['/detalle-personaje', index]);
  }
}
