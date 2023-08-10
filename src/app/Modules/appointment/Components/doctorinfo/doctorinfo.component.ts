import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogBox2Component } from '../dialog-box2/dialog-box2.component';
import { DocService } from '../../services/doc.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.component.html',
  styleUrls: ['./doctorinfo.component.css']
})
export class DoctorinfoComponent {

  data:any;
 
  constructor(public dialog: MatDialog,private docservice:DocService,private router:Router){

    // this.docservice.id.subscribe(res=>{
    //   console.log("emited id=>",res)
    // })

    this.docservice.getById2().subscribe(res2=>{
      
      if(res2){
        this.data=res2
      }
    })

  
  }


  delete(id:any){
  
    this.docservice.delete(id).subscribe(res=>{
      console.log("delted data of id=>",id);
    });
   
    this.router.navigate(['/doctors'])

  }

  

















  openDialog(){
    const dialogRef = this.dialog.open(DialogBox2Component);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
