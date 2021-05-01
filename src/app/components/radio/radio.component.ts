import { Component, OnInit, Input } from '@angular/core';
import { Radio, Order } from 'src/types';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class RadioComponent implements OnInit {
  @Input() item!: Radio;
  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
