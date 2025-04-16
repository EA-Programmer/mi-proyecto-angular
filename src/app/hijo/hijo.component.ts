import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() nombre: string = '';
  @Output() sumar = new EventEmitter<number>();

  emitirEvento() {
    this.sumar.emit(1); // o cualquier número que quieras sumar
  }
}
