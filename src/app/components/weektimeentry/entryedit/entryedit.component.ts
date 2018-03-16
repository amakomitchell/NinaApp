import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { TimeEntry } from '../../../shared/models/time-entry';


@Component({
  selector: 'app-entryedit',
  templateUrl: './entryedit.component.html',
  styleUrls: ['./entryedit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntryeditComponent implements OnInit {
  // @ViewChild('typeInput') typeInputRef: ElementRef;
  @ViewChild('hoursInput') hoursInputRef: ElementRef;
  @Output() timeentryAdded = new EventEmitter<TimeEntry>();


  constructor() {}

  ngOnInit() {
  }

  onAddTime() {
    // const tmeType = this.typeInputRef.nativeElement.value;
    const tmeHours = this.hoursInputRef.nativeElement.value;
    const newTimeEntry = new TimeEntry(tmeHours);
    this.timeentryAdded.emit(newTimeEntry);
  }


}
