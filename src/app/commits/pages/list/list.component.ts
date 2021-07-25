import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { CommitGitHub } from '../../interfaces/commits.interfaces';
import { CommitService } from '../../services/commit.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 
  userGithub: any[] = [
    {value: 'halain', desc: 'Halain'},
  ];

  repository: any[] = [
    {value: 'commitsApp', desc: 'CommitsAPP'},
  ];

  commit: any = {
    userGithub: '',
    repository: ''
}


displayedColumns: string[] = ['avatar_url', 'author', 'message', 'html_url','date', 'email' ];
dataSource: CommitGitHub[] = [];



  constructor(private notification: SharedService,
              private commitServices: CommitService) { }

  ngOnInit(): void {
  }

  load(){
    if (!this.commit.userGithub || !this.commit.repository) {
      this.notification.showMessage('info','Debe seleccionar el usuario y repositorio','Ooops...');
      return;
    }

    this.commitServices.listCommits(this.commit.userGithub, this.commit.repository)
    .subscribe( commit => {
      console.log(commit);
      this.dataSource = commit;
      
    });
    
    
  }

}
