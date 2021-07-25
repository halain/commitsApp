import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import {MatPaginator} from '@angular/material/paginator';
import { CommitGitHub } from '../../interfaces/commits.interfaces';
import { CommitService } from '../../services/commit.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit  {


  userGithub: any[] = [{value: 'halain', desc: 'Halain'}];
  repository: any[] = [{value: 'commitsApp', desc: 'CommitsAPP'}];
  commit: any = {userGithub: '', repository: ''};

  @ViewChild(MatPaginator,{static: true}) paginator!: MatPaginator;
  

  loading: boolean = false;
  ELEMNT_DATA: CommitGitHub[] = [];
  displayedColumns: string[] = ['avatar_url', 'author', 'message', 'html_url','date', 'email' ];
  dataSource =  new MatTableDataSource<CommitGitHub>(this.ELEMNT_DATA); 

  constructor(private notification: SharedService,
              private commitServices: CommitService) { }

  ngOnInit() {
    this.setDatatableConfig();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  setDatatableConfig(){
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Primero'
    this.paginator._intl.lastPageLabel = 'Ultimo'
    this.dataSource.paginator = this.paginator;
    
  }

  load(){
    if (!this.commit.userGithub || !this.commit.repository) {
      this.notification.showMessage('info','Debe seleccionar el usuario y repositorio','Ooops...');
      return;
    }
    this.loading = true
    this.commitServices.listCommits(this.commit.userGithub, this.commit.repository)
      .subscribe( commit => {
        console.log(commit);
        this.dataSource.data = commit;
        this.loading = false;
    }, err => this.loading = false);
    
    
  }

}
