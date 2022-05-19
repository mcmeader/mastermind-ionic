import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-peg',
  templateUrl: './color-peg.component.html',
  styleUrls: ['./color-peg.component.scss'],
})
export class ColorPegComponent implements OnInit {
  @Input() pegNumber: number;
  @Input() static: boolean;
  @Input() pegColor: string;
  @Output() clicked = new EventEmitter<number>();

  public borderColor: string;
  public activated: boolean;

  ngOnInit(): void {
  }
  public clickPeg() {
    if (!this.static) {
      this.borderColor = this.activated ? 'black' : 'gold';
      if (this.activated){
        this.clicked.emit(this.pegNumber);
      }
      this.activated = !this.activated
    }
  }
}
