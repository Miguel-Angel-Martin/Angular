import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { IPagination } from '../../../interfaces/pagination';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  data: IPagination[] = [];
  page_size: number = 10;
  page_number: number = 1;
  errorMessage = '';
  pageSizeOptions = [5, 10, 20, 50, 100];

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

  handlePage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
}
