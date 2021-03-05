import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '@services/data.service';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [DataService],
})
export class AutocompleteComponent implements OnInit {
  constructor(private dataService: DataService) {}
  public keyword = 'name';
  public data$: Observable<any[]>;
  public keywords = ['name', 'capital', 'region'];

  getData(): void {
    this.data$ = this.dataService.getAllCountries();
  }
  ngOnInit(): void {
    this.getData();
  }
}
