import { Component, OnInit, Input } from '@angular/core';
import { Checkboxes } from 'src/types';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
  @Input() item!: Checkboxes;

  constructor() { }

  ngOnInit(): void {
  }

}
