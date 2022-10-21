import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isiUser = [
    {UName: 'tes1', ULevel: 'admin'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddedUser(UserInput: { UName: string; ULevel: string }) {
    this.isiUser.push({
      UName: UserInput.UName,
      ULevel: UserInput.ULevel,
    });
  }



}
