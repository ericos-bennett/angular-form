import { Component, OnInit, Input } from '@angular/core';
import { Textbox, Order } from 'src/types';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextboxComponent implements OnInit {
  @Input() item!: Textbox;
  @Input() order!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
