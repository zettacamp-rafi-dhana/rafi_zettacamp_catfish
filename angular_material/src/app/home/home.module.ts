import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { InputNameComponent } from './input-name/input-name.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ButtonComponent,
    InputNameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    InputNameComponent,
    HomeComponent
  ]
})
export class HomeModule { }
