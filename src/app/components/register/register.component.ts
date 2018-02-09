import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Hero } from '../../hero';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  genders = ['Male', 'Female', 'Other'];

  model = new Hero(1, 'Ugochi', 'Amako', '08132063194', this.genders[1], 'Satellite town', 'amakomitchell@yahoo.com', 'sugarpie');

  submitted = false;

  onSubmit(){ this.submitted = true; }

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
     this.model = new Hero(2, '', '', '', '', '', '', '');
   }
}
