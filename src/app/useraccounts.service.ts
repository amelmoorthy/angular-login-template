import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccountsService {

  userDb = [];
  
  constructor() { }

  addUser(username,password){
 
      let obj = {
        uname : username,
        pass: password
      }
      this.userDb.push(obj)
      console.log(this.userDb)
  }

  authenticate(username,password){

    let authStat = this.userDb.some(function(element) {   

      return element.uname === username && element.pass === password;
    })
    console.log(authStat)
    return authStat
  }
    

}
