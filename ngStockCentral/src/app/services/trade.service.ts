import { Trade } from './../models/trade';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  private url = environment.baseUrl + 'api/trades';

  constructor(private http:HttpClient) { }

  index() {
    return this.http.get<Trade[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  create(trade:Trade){
    return this.http.post<Trade>(this.url, trade).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating trade')
        }
      )
    );
  }

  destroy(id:number){
    return this.http.delete<void>(this.url+ '/'+id).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating trade')
        }
      )
    );
  }

  update(updateTrade:Trade){
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    console.log(updateTrade.id)

    return this.http.put<Trade>(this.url + '/' + updateTrade.id, updateTrade, httpOptions).pipe(
      catchError(
        (err:any)=>{
          console.log(err);
          return throwError('httpClient error creating trade')
        }
      )
    );
  }
}
