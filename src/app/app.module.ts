import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './shared/services/validate.service';
import { AuthService } from './shared/services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FooterComponent } from './components/footer/footer.component';
import { WeektimeentryComponent } from './components/weektimeentry/weektimeentry.component';
import { BreaktimeComponent } from './components/breaktime/breaktime.component';
import { ContactComponent } from './components/contact/contact.component';
import { EntryeditComponent } from './components/weektimeentry/entryedit/entryedit.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardService } from './shared/services/dashboard.service';
import { DashboardWeeklyComponent } from './components/dashboard/dashboard-weekly/dashboard-weekly.component';
import { DashboardMonthlyComponent } from './components/dashboard/dashboard-monthly/dashboard-monthly.component';
import { WorksiteService } from './shared/services/worksite.service';
import { TimeEntryService } from './shared/services/time-entry.service';
//import {Success} from 'angular2-success-messages';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    WeektimeentryComponent,
    BreaktimeComponent,
    ContactComponent,
    EntryeditComponent,
    DashboardWeeklyComponent,
    DashboardMonthlyComponent,
    
  ],
  imports: [
    //ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [
    ValidateService, 
    AuthService,
    DashboardService,
    WorksiteService,
    TimeEntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
