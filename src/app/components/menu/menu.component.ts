import { Component, OnInit } from '@angular/core';
import { Textbox, Radio, Checkboxes, Dropdown } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  specialRequests: Textbox = {
    id: 'specialRequests',
    title: 'Any special requests?',
    placeholder: ''
  }

  main: Radio = {
    id: 'main',
    title: 'Please select your main',
    options: ['Burger', 'Steak']
  }

  condiments: Checkboxes = {
    id: 'condiments',
    title: 'What toppings would you like?',
    options: ['ketchup', 'mustard', 'lettuce', 'tomato']
  }

  doneness: Dropdown = {
    id: 'doneness',
    title: 'How would you like your steak?',
    options: ['rare', 'medium', 'well done']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
