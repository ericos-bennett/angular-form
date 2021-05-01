import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Textbox, Radio, Checkboxes, Dropdown, Meal } from 'src/types';
import { Order } from '../../Models';

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

  ordering = false;
  order = new Order('', '', {}, '', '', '', 0, '');

  addToCart() {

    const getMainModifier = (main: string) => {
      switch (main) {
        case 'Burger':
          let condiments = [];
          for (let condiment in this.order.condiments) {
            if (this.order.condiments[condiment]) {
              condiments.push(condiment);
            }
          }
          return condiments.join(', ');
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

    const meal: Meal = {
      main: this.order.main,
      mainModifier: getMainModifier(this.order.main),
      side: this.order.side,
      sideModifier: getSideModifier(this.order.side),
      specialRequests: this.order.specialRequests
    }
    this.cart.addMeal(meal);

    // Reset the menu form
    this.ordering = false;
    this.order = new Order('', '', {}, '', '', '', 0, '');

  }

  newOrder() {
    this.ordering = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.order); }

  constructor(public cart: CartService) {}

  ngOnInit(): void {
  }

}
