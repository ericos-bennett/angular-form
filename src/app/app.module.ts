import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioComponent } from './components/radio/radio.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TextboxComponent,
    CheckboxesComponent,
    DropdownComponent,
    RadioComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
