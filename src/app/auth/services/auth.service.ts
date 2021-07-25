import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User, AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;
  private _user!: User;
  get user(){
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  
  //Create new User
  register(name: string, email: string, password: string){

    const url = `${this.baseURL}/auth/new`
    const body = {email, password, name};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( ({ok, token}) => {
            if (ok) {
              localStorage.setItem('token', token!);
            }
        }),
        map( resp => resp.ok),
        catchError( err => of(err.error.msg) )
      );
  }

  

  //Login user
  login(email: string, password: string) {

    const url = `${this.baseURL}/auth`
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
            if (resp.ok) {
              localStorage.setItem('token', resp.token!);
            }
        }),
        map( resp => resp.ok),
        catchError( err => of(err.error.msg) )
      );
  }

  
  //Logout
  logout(){
    localStorage.clear();
  }


  //Validate and renew token
  validateToken(){
    
    const url = `${this.baseURL}/auth/renew`;
    const headers = new HttpHeaders()
    .set('x-api-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers})
          .pipe(
            map( resp => {
              localStorage.setItem('token', resp.token!);
              this._user = {
                name: resp.name!,
                uid: resp.uid!,
                email: resp.email!
              }
              return resp.ok
            }),
            catchError( err => of(false) )
          );
  }


}
