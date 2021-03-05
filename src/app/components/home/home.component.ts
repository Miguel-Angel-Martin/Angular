import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color = '';
  //@Input() parentDataForChild

  @Input('parentDataForChild') parentDataForChild // change the name of the variable
  constructor() { }

  ngOnInit(): void {
  }

}
