import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guitar } from 'src/app/guitar';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() guitar : Guitar = {
    photo : '',
    brand : '',
    shape : '',
    price : 0,
    color : '',
    type : ''
  }
  localGuitar : Guitar = {
    photo : '',
    brand : '',
    shape : '',
    price : 0,
    color : '',
    type : ''
  }
  @Output() submit = new EventEmitter<Guitar>();
  ngOnInit(){
    this.localGuitar = { ...this.guitar };
  }

  sentToParent(result : NgForm) {
    this.submit.emit(result.value);
  }
}
