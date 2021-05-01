import { Component, OnInit, Input } from '@angular/core';
import { Order, Dropdown } from 'src/types';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class DropdownComponent implements OnInit {
  @Input() item!: Dropdown;
  @Input() order!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
