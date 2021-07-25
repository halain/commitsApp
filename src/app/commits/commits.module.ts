import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';


import { CommitsRoutingModule } from './commits-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    MaterialModule,
  ]
})
export class CommitsModule { }
