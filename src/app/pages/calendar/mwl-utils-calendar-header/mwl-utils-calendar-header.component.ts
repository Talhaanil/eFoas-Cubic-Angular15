import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-mwl-utils-calendar-header',
  templateUrl: './mwl-utils-calendar-header.component.html',
  styleUrls: ['./mwl-utils-calendar-header.component.css']
})
export class MwlUtilsCalendarHeaderComponent {
  @Input() view: string="";

  @Input() viewDate: Date= new Date();

  @Input() locale = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}
