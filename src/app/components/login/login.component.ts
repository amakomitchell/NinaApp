import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMesage:FlashMessagesService
  
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(username == 'admin' && password == 'admin')
      this.router.navigate(['dashboard']);
    /*const employee = {
      username: this.username,
      password:this.password
    }*/

    /*this.authService.authenticateEmployee(employee).subscribe(data => {
      if(data.success){

      } else{
        this.flashMesage.show(data.msg, {cssClass: 'alert-danger',
        timeout:5000});
        this.router.navigate(['login']);
      }
    });*/

  }
}
