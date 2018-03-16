import { Injectable } from '@angular/core';
import { TimeEntry } from '../models/time-entry';

@Injectable()
export class TimeEntryService {

    private timeEntries: TimeEntry[] = [
        new TimeEntry(8.90),
        new TimeEntry(30.05)
    
    ];

    constructor() { }

    onTimeEntryAdded(timeentry: TimeEntry) {
        this.timeEntries.push(timeentry);
    }
    
}