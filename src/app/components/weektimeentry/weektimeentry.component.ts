import { Component, OnInit, ViewEncapsulation, TemplateRef, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TimeEntry } from '../../time-entry';



@Component({
  selector: 'app-weektimeentry',
  templateUrl: './weektimeentry.component.html',
  styleUrls: ['./weektimeentry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeektimeentryComponent implements OnInit {
  @ViewChild('typeInput') typeInputRef: ElementRef;
  @ViewChild('hoursInput') hoursInputRef: ElementRef;
  @Output() timeentryAdded = new EventEmitter<TimeEntry>();


  modalRef: BsModalRef;
  datepickerModel: Date;
  daterangepickerModel: Date[];

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

  onAddTime() {
    const tmeType = this.typeInputRef.nativeElement.value;
    const tmeHours = this.hoursInputRef.nativeElement.value;
    const newTimeEntry = new TimeEntry(tmeType, tmeHours);
    this.timeentryAdded.emit(newTimeEntry);
  }

  
}
