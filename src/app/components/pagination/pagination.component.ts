import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  data = [];
  errorMessage = '';
  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    this.paginationService.getAll().subscribe(
      (data) => {
        this.data = data;
        //console.log(data);
      },
      (error) => (this.errorMessage = error)
    );
  }
}
