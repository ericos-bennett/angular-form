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
    options: ['Ketchup', 'Mustard', 'Lettuce', 'Tomato']
  }

  doneness: Dropdown = {
    id: 'doneness',
    title: 'How would you like your steak?',
    options: ['Rare', 'Medium', 'Well Done']
  }

  burgerSide: Radio = {
    id: 'side',
    title: 'Which side would you like?',
    options: ['Fries', 'Salad']
  }

  steakSide: Radio = {
    id: 'side',
    title: 'Which side would you like?',
    options: ['Salad', 'Baked Potato']
  }

  friesSize: Dropdown = {
    id: 'friesSize',
    title: 'What size fries would you like?',
    options: ['Small', 'Large']
  }

  dressing: Dropdown = {
    id: 'dressing',
    title: 'Which dressing would you like?',
    options: ['Caesar', 'Balsamic']
  }

  potatoCount: Textbox = {
    id: 'potatoCount',
    title: 'How many potatoes would you like?',
    pattern: /^(0|\+?[1-9]\d*)$/
  }

  specialRequests: Textbox = {
    id: 'specialRequests',
    title: 'Any special requests?',
  }

  order = new Meal('', '', {}, '', '', '', 0, '');

  addToCart() {

    const getMainModifier = (main: string) => {
      switch (main) {
        case 'Burger':
          return this.order.condiments;
        case 'Steak':
          return this.order.doneness;
        default:
          return '';
      }
    };

    const getSideModifier = (side: string) => {
      switch (side) {
        case 'Fries':
          return this.order.friesSize;
        case 'Salad':
          return this.order.dressing;
        case 'Baked Potato':
          return this.order.potatoCount;
        default:
          return '';
      }
    }

    const meal = {
      main: this.order.main,
      mainModifier: getMainModifier(this.order.main),
      side: this.order.side,
      sideModifier: getSideModifier(this.order.side),
      specialRequests: this.order.specialRequests
    }
    console.log(meal);

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.order); }

  constructor() { }

  ngOnInit(): void {
  }

}
