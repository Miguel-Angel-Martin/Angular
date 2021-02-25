
import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/interfaces/course';
import { CourseService } from "../../services/course.service";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  //@Input() parentDataForChild

  @Input('parentDataForChild') parentDataForChild // change the name of the variable

  courses = [];
  errorMessage = "";
  status = "Form not submitted";

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data
    }, error => this.errorMessage = error);
  }
  onSendForm(email) {

    console.log(email);
    this.status = "Form has been sent";
  }

}
