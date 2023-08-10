import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { PreferenceComponent } from './Components/preference/preference.component';
import { AboutComponent } from './Components/about/about.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogBoxComponent } from './Components/dialog-box/dialog-box.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorinfoComponent } from './Components/doctorinfo/doctorinfo.component';
import { DialogBox2Component } from './Components/dialog-box2/dialog-box2.component';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ScheduleComponent,
    DoctorsComponent,
    PatientsComponent,
    PreferenceComponent,
    AboutComponent,
    DialogBoxComponent,
    DoctorinfoComponent,
    DialogBox2Component,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    AppointmentRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class AppointmentModule { }
