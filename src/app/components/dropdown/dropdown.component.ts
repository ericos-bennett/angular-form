import { Component, OnInit, Input } from '@angular/core';
import { Radio, Order } from 'src/types';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() item!: Radio;
  @Input() order!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
