import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser:User = new User();
  tempPassword : string ='';

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  // createUser(newUser:User){
  //   this.userSvc.create(newUser).subscribe(
  //     success => {
  //       newUser = new User();
  //       //might come back to set this user as logged in

  //     },
  //     err => {
  //       console.log(err)

  //     }
  //   )


  //}
  checkPassword(password:any){
    if(password === this.newUser.password){
      console.log("pass word match")
    }
    else{
      console.log("password no match")
    }


  }

  register(user: User): void {
    console.log('Registering user:');
    console.log(user);
    this.auth.register(user).subscribe({
      next: (registeredUser) => {
        this.auth.login(user.username, user.password).subscribe({
          next: (loggedInUser) => {
            this.router.navigateByUrl('/home');
          },
          error: (problem) => {
            console.error('RegisterComponent.register(): Error logging in user:');
            console.error(problem);
          }
        });
      },
      error: (fail) => {
        console.error('RegisterComponent.register(): Error registering account');
        console.error(fail);
      }
    });
  }

}
