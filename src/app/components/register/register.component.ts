import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidateService } from '../../shared/services/validate.service';
import { AuthService } from '../../shared/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Hero } from '../../shared/models/hero';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  genders = ['Male', 'Female', 'Other'];

  quals = ['Certificate', 'HND', 'Bsc', 'Msc', 'Phd'];

  model = new Hero(1, 'Ugochi', 'Amako', '08132063194', this.genders[1], 'Satellite town', this.quals[1], 'amakomitchell@yahoo.com', 'sugarpie', 'sugarpie');

  submitted = false;

  onSubmit(){ 
    this.submitted = true; 

    // Validate Email
    // if(!this.validateService.validateEmail(employee.email)) {
    //   console.log('Please use a valid email');
    //   return false;
    // }

    // Register user
    // this.authService.registerEmployee(employee).subscribe(data => {
    //   if(data.success){
    //     this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', time:1000});
    //     this.router.navigate(['/login']);
    //   } else {
    //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', time:1000});
    //     this.router.navigate(['/register']);
    //   }
    // });
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router,
    
  ) { }

  ngOnInit() {
  }

   newHero() {
     this.model = new Hero(2, '', '', '', '', '', '', '', '', '');
   }
}
