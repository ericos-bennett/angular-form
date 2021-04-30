import { Component, OnInit, Input } from '@angular/core';
import { Textbox } from 'src/types';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() item!: Textbox;

  constructor() { }

  ngOnInit(): void {
  }

}
