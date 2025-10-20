import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
  standalone: true,  // Marca como standalone
  imports: [IonicModule]  // Asegúrate de agregar IonicModule aquí
})
export class DetallePersonajePage {
  // Tu lógica aquí
}
