import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs/operators';
import { SharedService } from '../../../shared/services/shared.service';
import { CommitService } from '../../services/commit.service';
import { CommitGitHub } from '../../interfaces/commits.interfaces';


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

commits: CommitGitHub[] = [];

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
      this.commits = commit;
      
    });
    
    
  }

}
