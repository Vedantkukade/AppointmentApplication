import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { PreferenceComponent } from './Components/preference/preference.component';
import { AboutComponent } from './Components/about/about.component';
import { DoctorinfoComponent } from './Components/doctorinfo/doctorinfo.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"schedule",
        component:ScheduleComponent
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"doctors",
        component:DoctorsComponent
      },
      {
        path:"patients",
        component:PatientsComponent
      },
      {
        path:"preference",
        component:PreferenceComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"doctorinfo",
        component:DoctorinfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
