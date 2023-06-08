import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit {
  rowsBasic = [];
  fullScreenRow = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  rows = [];
  expanded = {};
  timeout: any;

  rowsFilter = [];
  tempFilter = [];
  @ViewChild(DatatableComponent)
  table!: DatatableComponent;

  constructor() {
    this.table;
    this.fetchBasicData((data:any) => {
      this.rowsBasic = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });

    this.fetch((data:any) => {
      this.rows = data;
    });

    this.fetchFullScreenData((data:any) => {
      this.fullScreenRow = data;
    });

    this.fetchFilterData((data:any) => {
      // cache our list
      this.tempFilter = data;

      // push our inital complete list
      this.rowsFilter = data;
    });
  }

  ngOnInit() {
  }

  fetchBasicData(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/basic.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchFullScreenData(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/fullscreen.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchFilterData(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFilter.filter(function(d) {
      // return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      return null
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onPage(event:any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      const rows = JSON.parse(req.response);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };
    req.send();
  }

  getRowHeight(row:any) {
    return row.height;
  }

}


