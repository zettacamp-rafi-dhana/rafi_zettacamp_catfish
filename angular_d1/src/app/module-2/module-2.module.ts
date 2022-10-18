import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component } from './module2.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';



@NgModule({
  declarations: [
    Module2Component,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module2Module { }
