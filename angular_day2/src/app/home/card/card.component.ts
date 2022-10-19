import { Component, Input,OnInit  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardEach: any;
           title: any;

  constructor() { }

  ngOnInit(): void {
    this.title = this.cardEach.title;
    console.log(this.cardEach);
  }


  ChangeTitle(){

    if(this.title === 'berubah') {
      this.title = this.cardEach.title;
    } else {
      this.title = 'berubah'
    }
  }
}


