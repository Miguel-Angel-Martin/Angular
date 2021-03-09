import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BarsComponent } from '../graphs/bars/bars.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  title = '@ViewChild';
  @ViewChild('name') name: ElementRef;
  @ViewChild(BarsComponent) childComponent: BarsComponent;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit(): void {
    this.name.nativeElement.value = 'Miguel';
    console.log(this.name.nativeElement.value);
  }
}
