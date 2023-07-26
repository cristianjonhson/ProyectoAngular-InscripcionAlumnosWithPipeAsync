
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './component/alumnos/alumnos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AlumnosComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, // for reactive forms
  ]
})

export class DashboardModule { }
