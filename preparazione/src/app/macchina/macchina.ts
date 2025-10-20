import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class Macchina{
  pezzi: string[]=['viti','chiodi','bulloni']
  @Input() macchina!: string;
  constructor() {
  }
  ngOnInit() {}
}
