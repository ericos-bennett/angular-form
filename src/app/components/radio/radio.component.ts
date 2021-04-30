import { Component, OnInit, Input } from '@angular/core';
import { Radio } from 'src/types';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() item!: Radio;

  constructor() { }

  ngOnInit(): void {
  }

}
