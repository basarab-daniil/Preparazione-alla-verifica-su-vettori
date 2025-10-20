import { Component } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  macchine: string[];
  constructor() {
    this.macchine = ['Escavatore', 'Pala Meccanica', 'Rullo Compressore', 'Betoniera', 'Trivella', 'Carroponte', 'Grù', 'Carrello Elevatore', 'Trattore Cingolato', 'Livellatrice'];
  }
  ngOnInit () {
  }
}
