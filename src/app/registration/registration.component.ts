import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccountsService } from '../useraccounts.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

   username = '';
   password= '';

  
  
  
  
  constructor(

    private router:Router,
    private userService: UseraccountsService
  ) {}

  ngOnInit() {
  }

  registerUser(){
   
     //console.log(this.password,this.username)
     this.userService.addUser(this.username,this.password)
     this.router.navigate(['/login'])
  }




}
