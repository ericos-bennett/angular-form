import { Component, OnInit } from '@angular/core';
import { Textbox, Radio, Checkboxes, Dropdown } from 'src/types';
import { Meal } from '../../Models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

  burgerSide: Radio = {
    id: 'side',
    title: 'Which side would you like?',
    options: ['fries', 'salad']
  }

  steakSide: Radio = {
    id: 'side',
    title: 'Which side would you like?',
    options: ['salad', 'baked potato']
  }

  friesSize: Dropdown = {
    id: 'friesSize',
    title: 'What size fries would you like?',
    options: ['small', 'large']
  }

  dressing: Dropdown = {
    id: 'dressing',
    title: 'Which dressing would you like?',
    options: ['caesar', 'balsamic']
  }

  potatoCount: Textbox = {
    id: 'potatoCount',
    title: 'How many potatoes would you like?',
    placeholder: ''
  }

  specialRequests: Textbox = {
    id: 'specialRequests',
    title: 'Any special requests?',
    placeholder: ''
  }

  order = new Meal('', '', {}, '', '', '', 0, '');

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.order); }

  constructor() { }

  ngOnInit(): void {
  }

}
