import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule
  ]
})
export class CommitsModule { }
