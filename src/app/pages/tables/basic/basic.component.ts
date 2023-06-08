import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.peity-line').peity('line', {
      fill: '#13dafe',
      stroke: '#13dafe',
      width: 120,
      height: 40
    });
  }

}
