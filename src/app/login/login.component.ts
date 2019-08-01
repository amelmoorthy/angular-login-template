import { Component, OnInit } from '@angular/core';
import { UseraccountsService } from '../useraccounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  username='';
  password='';
  
  
  constructor(
    private userService:UseraccountsService
  ) {

   


   }

  ngOnInit() {
  }
 
  login(){
  
    //  console.log("login successful")
     let authstat =  this.userService.authenticate(this.username,this.password)
     console.log(authstat);
     
  }


}
