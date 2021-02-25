import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name: string = "Miguel";
  surname: string = "Martín";
  company: string = "";
  age: number = 18;
  lightStatus: string = "GREEN";

  statusList: Array<string> = ['RED', 'GREEN', 'YELLOW', 'BROKE']


  constructor() { }

  ngOnInit(): void { }

  registerProperty = false;
  enableProperty = false;

  getRegisterUser(event: Event) {
    this.registerProperty = !this.registerProperty;
    if (this.registerProperty) {
      this.enableProperty = false;
    } else {
      this.enableProperty = true;
    }
  }
  trafficLight(status: string) {
    this.lightStatus = status;
  }

  companyName(company) { // appending the updated value to the variable
    this.company = company.target.value;
  }

  employeeAge(age) { // appending the updated value to the variable
    this.age = age.target.value;
  }
}
