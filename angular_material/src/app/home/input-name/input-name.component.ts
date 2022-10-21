import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  @Output() AddData = new EventEmitter<any>();
  newUName!: string ;
  newULevel!: string ;

  constructor() { }

  ngOnInit(): void {
  }
  onKlick() {
    this.AddData.emit({
      UName: this.newUName,
      ULevel: this.newULevel,
    });
}
}
