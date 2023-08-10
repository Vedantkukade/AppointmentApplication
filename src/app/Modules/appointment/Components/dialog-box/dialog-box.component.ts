import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators, ControlContainer } from '@angular/forms';
import { DocService } from '../../services/doc.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {


  @ViewChild('fileInput') el!: ElementRef;
  imageUrl: any;

constructor(private docdataservice:DocService,  private router:Router){



}
  docform=new FormGroup(
    {
      name:new FormControl(''),
      gender:new FormControl(),
      number:new FormControl(),
      email:new FormControl(),
      dept:new FormControl(),
      edu:new FormControl(),
      exp:new FormControl(),
      desi:new FormControl(),
      duty:new FormControl(),
      photo: new FormControl()
    }
  )
  

  selectURL(event:any){
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
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();        
    }
  }

  add(){
    this.docdataservice.postData(this.docform.value).subscribe(res=>{

      this.docdataservice.id.emit(res)
    })
   this.reloadPage()

  }

  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });

  }
  // addlist(){
  //   this.docdataservice.getData().subscribe(res=>{
      
  //     if(res){
  //       this.list=res
  //     }
     
  //     this.elements=this.list.map((item:any)=>[{id:item.id,name:item.name,photo:item.photo,edu:item.edu,desi:item.desi,exp:item.exp}])
  //     console.log("list=>",this.elements)

  //     this.docdataservice.postList(this.elements).subscribe(res=>{
  //       // console.log("posted list=>",res)
  //     })
  //   })
  // }
}
