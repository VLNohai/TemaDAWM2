import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
