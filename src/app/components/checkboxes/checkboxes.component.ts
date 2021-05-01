import { Component, OnInit, Input } from '@angular/core';
import { Checkboxes, Order } from 'src/types';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class CheckboxesComponent implements OnInit {
  @Input() item!: Checkboxes;
  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
