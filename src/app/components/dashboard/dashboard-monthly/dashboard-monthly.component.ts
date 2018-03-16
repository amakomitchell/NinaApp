import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Dashboard } from '../../../shared/models/dashboard.model';
import { DashboardService } from '../../../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard-monthly',
  templateUrl: './dashboard-monthly.component.html',
  styleUrls: ['./dashboard-monthly.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardMonthlyComponent implements OnInit {
  monthly_dashboards: Dashboard[];

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.monthly_dashboards = this.dashboardService.getMonthlyDashboards();
  }

  displayMonthly() {
    this.router.navigate(['month'], {relativeTo: this.route});
  }
  

}
