
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/interfaces/course';
import { CourseService } from "../../services/course.service";
import { map } from 'rxjs/operators';
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

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {


    /* this.courseService.getCourses().subscribe(data => this.courses = data,
      error => this.errorMessage = error);
 */
    this.courseService.getCourses().pipe(map(data => { })).subscribe(result => {
      console.log(result);
    });
    console.log("Courses: " + this.courses);
    console.log("Error: " + this.errorMessage);
  }

}
