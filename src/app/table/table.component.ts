import { Component } from '@angular/core';
import { GuitarsService } from '../services/guitars.service';
import { FormComponent } from '../form/form/form.component';
import { Guitar } from '../guitar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  dataSet : any[] = [];
  pageIndex = 1;
  constructor(private guitarsService : GuitarsService){
    this.guitarsService.getGuitars().subscribe(rez =>{
      for(let guitar of rez){
        this.dataSet.push({guitar : guitar, visible : false});
      }
    })
  }
  getFormValue(guitar : any, index : number){
      if(guitar.price){
        this.dataSet[index].guitar = guitar;
      }
  }
  pageChanged(pageIndex: number) {
    this.pageIndex = pageIndex;
  }
}
