import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  panelOpenState = false;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  counter: number = 1;

  addCounter() {
    this.counter = this.counter + 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
