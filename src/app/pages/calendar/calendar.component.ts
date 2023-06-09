import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction,
  CalendarDateFormatter,
  DateFormatterParams
} from 'angular-calendar';
import { Subject } from 'rxjs';

import { startOfDay, endOfDay, subDays, endOfMonth, addHours, addDays, isSameMonth, isSameDay } from 'date-fns';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';

export class CustomDateFormatter extends CalendarDateFormatter {

  public override monthViewColumnHeader({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date);
  }
}

export const colors: any = {
  red: {
    primary: '#e74a25',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#00bbd9',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#2ecc71',
    secondary: '#b1fdcf'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    './calendar.component.css',
    '../../../../node_modules/angular-calendar/dist/css/angular-calendar.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent {
  items = [];
  public view = 'month';
  viewDate: Date = new Date();
  isChecked = true;
  public colorOption = ['red', 'blue', 'yellow', 'green'];

  public actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
      }
    }
  ];

  externalEvents: CalendarEvent[] = [
    {
      title: 'My Event One',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: 'My Event Two',
      color: colors.blue,
      start: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: 'My Event Three',
      color: colors.blue,
      start: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: 'My Event Four',
      color: colors.blue,
      start: new Date(),
      draggable: true,
      actions: this.actions
    }
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.green,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  public activeDayIsOpen = true;
  refresh: Subject<any> = new Subject();

  eventDropped({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      console.log(this.isChecked);
      if (!this.isChecked) {
        this.externalEvents.splice(externalIndex, 1);
      }
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  onAdd(event:any) {
    const color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
    this.externalEvents.push({
      title: event.value,
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors[color],
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: this.actions
    });
    this.refresh.next(event);
  }

  setEvent() {
    this.isChecked = !this.isChecked;
  }

}
