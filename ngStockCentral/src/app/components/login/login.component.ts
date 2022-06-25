import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser : User = new User();

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginUser:User){
    console.log(loginUser);

    this.auth.login(loginUser.username, loginUser.password).subscribe({
        next: (loggedinUser) => {
          this.router.navigateByUrl('/todo');
        },
        error: (fail) => {
          console.error('LoginComponent.login(): login failed');
        }

      }
    )
  }

}
