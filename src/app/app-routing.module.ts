import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeektimeentryComponent } from './components/weektimeentry/weektimeentry.component';
import { EntryeditComponent } from './components/weektimeentry/entryedit/entryedit.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardWeeklyComponent } from './components/dashboard/dashboard-weekly/dashboard-weekly.component';
import { DashboardMonthlyComponent } from './components/dashboard/dashboard-monthly/dashboard-monthly.component';


const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'dashboard', component: DashboardComponent, children: [
        { path:'week', component: DashboardWeeklyComponent },
        { path: 'month', component: DashboardMonthlyComponent}
    ] },
    {path:'profile', component: ProfileComponent},
    {path:'weektimeentry', component: WeektimeentryComponent, children: [
        {path:'entryedit', component: EntryeditComponent}
    ] },
    {path:'contact', component: ContactComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}