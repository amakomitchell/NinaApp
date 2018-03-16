import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Dashboard } from '../../shared/models/dashboard.model';
import { DashboardService } from '../../shared/services/dashboard.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  dashboards: Dashboard[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private dashboardService: DashboardService,
              private route: ActivatedRoute,
              private router: Router) {
    
   }

   displayWeekly() {
     this.router.navigate(['week'], {relativeTo: this.route});
    this.dashboards = this.dashboardService.getWeeklyDashboards();
   }

   displayMonthly() {
    this.router.navigate(['month'], {relativeTo: this.route});
  }

   
  /*openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }*/

  ngOnInit() {
  }

}
