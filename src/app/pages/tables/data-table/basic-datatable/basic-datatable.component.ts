import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-datatable',
  templateUrl: './basic-datatable.component.html'
})
export class BasicDatatableComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string='';
  public sortOrder = 'desc';

  constructor() { }

  ngOnInit() {
  
  }

}
