import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-peg',
  templateUrl: './color-peg.component.html',
  styleUrls: ['./color-peg.component.scss'],
})
export class ColorPegComponent {
  @Input() pegNumber: number;
  @Input() static: boolean;
  @Input() pegColor: string;
  @Output() clicked = new EventEmitter<number>();

  public clickPeg() {
    this.clicked.emit(this.pegNumber);
  }
}
