import { Component, OnInit, Input } from '@angular/core';
import { Textbox, Order } from 'src/types';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() item!: Textbox;
  @Input() order!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
