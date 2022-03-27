import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-peg-container',
  templateUrl: './peg-container.component.html',
  styleUrls: ['./peg-container.component.scss'],
})
export class PegContainerComponent {
  @Input() pegs: Array<any>;
  @Input() disabled: boolean;

  public clicked(event: number) {}
}
