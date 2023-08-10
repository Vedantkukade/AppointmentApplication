import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocService } from '../../services/doc.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-box2',
  templateUrl: './dialog-box2.component.html',
  styleUrls: ['./dialog-box2.component.css']
})
export class DialogBox2Component {


  @ViewChild('fileInput') el!: ElementRef;
  imageUrl: any;


  data: any;
  
  constructor(private service: DocService, private router: Router) {

    this.service.getById2().subscribe(res => {
      this.data = res;

      


      this.docform.setValue({
        id: this.data.id,
        name: this.data.name,
        gender: this.data.gender,
        number: this.data.number,
        email: this.data.email,
        dept: this.data.dept,
        edu: this.data.edu,
        exp: this.data.exp,
        desi: this.data.desi,
        duty: this.data.duty,
        photo: this.data.photo

      })
    })


  }

  docform = new FormGroup(
    {
      id: new FormControl(null),
      name: new FormControl(''),
      gender: new FormControl(),
      number: new FormControl(),
      email: new FormControl(),
      dept: new FormControl(),
      edu: new FormControl(),
      exp: new FormControl(),
      desi: new FormControl(),
      duty: new FormControl(),
      photo: new FormControl()
    }
  )



  selectURL(event: any) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.docform.patchValue({
          photo: reader.result
        });

      }
    }

  }

  update(){

    this.service.update(this.docform.value).subscribe(res => {

    })

    // this.router.navigate(['/doctors'])
    this.reloadPage()
  }


  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });

  }
}
