import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DocService } from '../../services/doc.service';



@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],

})
export class DoctorsComponent implements OnInit{

  // doclist=[

  //   {
  //     'img':'../../../../../assets/images/NemboLukni.png',
  //     'name':'DR. Nembo Lukeni',
  //     'educ':'MBBS, DMRD',
  //     'des':'Sr.Specialist',
  //     'exp':'10+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/MollieCobb.png',
  //     'name':'DR. Mpllie Cobb',
  //     'educ':'MBBS, MD PAEDIATRICS, DM NEUROLOGY',
  //     'des':'Jr.Specialist',
  //     'exp':'2+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/YaraBarros.png',
  //     'name':'DR. Yara Barros',
  //     'educ':'MBBS, DNB (FAMILY MEDICINE)',
  //     'des':'Sr.Specialist',
  //     'exp':'8+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/PaulWalker.png',
  //     'name':'DR. Paul Walker',
  //     'educ':'MBBS, MD (Dermatology)',
  //     'des':'Sr.Dermatology',
  //     'exp':'10+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/AmeliaEdwards.png',
  //     'name':'DR. Amelia Edwards',
  //     'educ':'MBBS, MD',
  //     'des':'Sr.Orthopedics',
  //     'exp':'10+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/AlexaRichardson.png',
  //     'name':'DR. Alexa Richardson',
  //     'educ':'MD, DM, FACC, FICC',
  //     'des':'Practitioner',
  //     'exp':'1+ years'
  //   },
  //   {
  //     'img':'../../../../../assets/images/NoutGolstein.png',
  //     'name':'DR. Nout Golstein',
  //     'educ':'MS',
  //     'des':'Jr. Cardio',
  //     'exp':'2+ years'
  //   },
  // ]

  doclist2:any;
  constructor(public dialog: MatDialog,private listservice:DocService){
   

   
  }
  ngOnInit(): void {
    
  this.getServiceData()

  }

 getServiceData(){
  this.listservice.getData().subscribe(res=>{
    this.doclist2=res
  
  })
 }

 getid2(data:any){
  
  this.listservice.getId2(data)

 }





openDialog(){
  const dialogRef = this.dialog.open(DialogBoxComponent);
  
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);

  });
}


}


