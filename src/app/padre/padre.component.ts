import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nombre = 'Estudiante';
  contadorTotal = 0;

  cambiarNombre() {
    this.nombre = 'Elias Astudillo';
  }

  actualizarContador(valor: number) {
    this.contadorTotal += valor;
  }
}
