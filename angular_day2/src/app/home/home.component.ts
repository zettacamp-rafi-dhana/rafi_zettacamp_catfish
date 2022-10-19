import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = [
    {tittle: 'card1', content:'adoawdoaljwdo'},
    {title: 'card2', content:'adoawdoaljwdo'},
    {title: 'card3', content:'adoawdoaljwdo'},
    {title: 'card4', content:'adoawdoaljwdo'},
    {title: 'card5', content:'adoawdoaljwdo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
