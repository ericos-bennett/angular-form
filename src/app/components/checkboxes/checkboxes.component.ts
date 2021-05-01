import { Component, OnInit, Input } from '@angular/core';
import { Checkboxes, Order } from 'src/types';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
  @Input() item!: Checkboxes;
  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
