import { Injectable } from '@angular/core';
import { LOT54 } from './mock-lot';
import {ParkingSpace} from './parking-space';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLot(): Observable<any> {
    return this.http.get('http://localhost:8080/getlot?number=54');
  }
}
