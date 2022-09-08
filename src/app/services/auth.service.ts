import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://cors-anywhere.herokuapp.com/http://sgfabricatordemo.netcarrots.in/SGFabricatorAPI/Service.svc/';
  // url='http://sgfabricatordemo.netcarrots.in/SGFabricatorAPI/Service.svc/';
  constructor(private http: HttpClient,) {

   }
   isAuthenticated():any{
    let otp = localStorage.getItem('otp')
      if (otp)
        {
          return true;
        } else {
          return false;
        }
  }
   loginUser(b: any): Observable<any> {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json ');
    return this.http.post(this.url + 'UserLoginAPI', b, { headers: headers }
    ).pipe(
      tap((res) => {
        // let token = localStorage.setItem('token', res.success.token);
        console.log(res);
      }),
    );
  }

}



