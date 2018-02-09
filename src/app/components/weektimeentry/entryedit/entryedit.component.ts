import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { TimeEntry } from '../../../time-entry';

@Component({
  selector: 'app-entryedit',
  templateUrl: './entryedit.component.html',
  styleUrls: ['./entryedit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntryeditComponent implements OnInit {

  timeEntries: TimeEntry[] = [
    new TimeEntry('Kunata Logic Soft Room', 8.90),
    new TimeEntry('OutsideInHR', 30.05)

  ]


  constructor() { }

  ngOnInit() {
  }

 
  onTimeEntryAdded(timeentry: TimeEntry) {
    this.timeEntries.push(timeentry);
  }

}
