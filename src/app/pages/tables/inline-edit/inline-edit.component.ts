import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html'
})
export class InlineEditComponent implements OnInit {

  editing = {};
  rows = [];

  constructor() {
    this.fetch((data:any) => {
      this.rows = data;
    });
  }

  ngOnInit(){}

  fetch(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event:any, cell:any, cellValue:any, row:any) {
    // this.editing[row.$$index + '-' + cell] = false;
    // this.rows[row.$$index][cell] = event.target.value;
  }

}
