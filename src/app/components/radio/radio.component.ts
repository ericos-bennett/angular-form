import { Component, OnInit, Input } from '@angular/core';
import { Radio, Order } from 'src/types';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() item!: Radio;
  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
