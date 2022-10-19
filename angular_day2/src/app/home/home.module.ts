import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    HomeComponent
  ]
})
export class HomeModule { }
