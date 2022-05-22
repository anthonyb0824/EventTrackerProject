import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl + 'api/users';

  constructor(private http:HttpClient) {

   }

   index() {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  create(newUser:User){
    return this.http.post<User>(this.url, newUser).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating user')
        }
      )
    );
  }

  destroy(id:number){
    return this.http.delete<void>(this.url+ '/'+id).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating user')
        }
      )
    );
  }

  update(updateUser:User){
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    console.log(updateUser.id)

    return this.http.put<User>(this.url + '/' + updateUser.id, updateUser, httpOptions).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating user')
        }
      )
    );
  }
}
