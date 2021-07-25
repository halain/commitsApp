import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CommitResponse, CommitGitHub } from '../interfaces/commits.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }


  listCommits(userGithub: string, repository: string): Observable<CommitGitHub[]>{

    const url = `${this.baseURL}/commits`
    const body = {userGithub, repository};

    return this.http.post<CommitResponse>(url, body)
      .pipe(
        map( resp => resp.data),
        catchError( err => of(err.error.msg) )
      );
  }
}
