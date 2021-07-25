import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { CommitsRoutingModule } from './commits-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ImagenPipe,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CommitsRoutingModule,
    MaterialModule,
  ]
})
export class CommitsModule { }
