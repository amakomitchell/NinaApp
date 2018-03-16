import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Dashboard } from '../../../shared/models/dashboard.model';
import { DashboardService } from '../../../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard-weekly',
  templateUrl: './dashboard-weekly.component.html',
  styleUrls: ['./dashboard-weekly.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardWeeklyComponent implements OnInit {
  weekly_dashboards: Dashboard[];

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.weekly_dashboards = this.dashboardService.getWeeklyDashboards();
  }

displayWeekly() {
  this.router.navigate(['week'], {relativeTo: this.route});
}


}
