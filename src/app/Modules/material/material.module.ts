import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

const array=[
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatSidenavModule,
MatAutocompleteModule,
MatFormFieldModule,
FormsModule,
ReactiveFormsModule,
MatSelectModule,
MatDialogModule,
MatRadioModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    array
  ]
})
export class MaterialModule { }
