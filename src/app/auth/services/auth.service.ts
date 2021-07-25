import { HttpClient } from '@angular/common/http';
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


}
