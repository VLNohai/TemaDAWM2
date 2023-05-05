import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Guitar } from '../guitar';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private httpClient : HttpClient) {
  }
  getGuitars() : Observable<any>{
    return this.httpClient.get('assets/data/guitars.json');
  }

}
