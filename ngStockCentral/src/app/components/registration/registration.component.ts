import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser:User = new User();
  tempPassword : string ='';

  constructor(private userSvc:UserService) { }

  ngOnInit(): void {
  }

  createUser(newUser:User){
    this.userSvc.create(newUser).subscribe(
      success => {
        newUser = new User();
        //might come back to set this user as logged in

      },
      err => {
        console.log(err)

      }
    )


  }
  checkPassword(password:any){
    if(password === this.newUser.password){
      console.log("pass word match")
    }
    else{
      console.log("password no match")
    }


  }

}
