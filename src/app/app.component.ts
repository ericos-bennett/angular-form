import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ordering = false;

  updateOrderingHandler(ordering: boolean) {
    this.ordering = ordering;
  }

}
