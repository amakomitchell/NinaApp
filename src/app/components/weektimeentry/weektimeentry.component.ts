import { Component, OnInit, ViewEncapsulation, Output, TemplateRef, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { BsDatepickerModule } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';

import { TimeEntry } from '../../shared/models/time-entry';
import { Worksite } from '../../shared/models/worksite.model';

import { WorksiteService } from '../../shared/services/worksite.service';
import { TimeEntryService } from '../../shared/services/time-entry.service';



@Component({
  selector: 'app-weektimeentry',
  templateUrl: './weektimeentry.component.html',
  styleUrls: ['./weektimeentry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeektimeentryComponent implements OnInit {
  worksites: Worksite[];
  timeEntries: TimeEntry[];

  modalRef: BsModalRef;
  datepickerModel: Date;
  daterangepickerModel: Date[];

  constructor(private modalService: BsModalService,
            private route: ActivatedRoute,
            private worksiteService: WorksiteService,
            private timeentryService: TimeEntryService) { }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this.worksites = this.worksiteService.getWorksite();
  }

  
}
