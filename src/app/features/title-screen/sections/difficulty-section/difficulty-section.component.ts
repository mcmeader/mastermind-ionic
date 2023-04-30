import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty-section',
  templateUrl: './difficulty-section.component.html',
  styleUrls: ['./difficulty-section.component.scss'],
})
export class DifficultySectionComponent implements OnInit {
  public readonly constants = CO;

  constructor() {}

  ngOnInit() {}
}
