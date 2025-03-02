import { IMeteoDaily } from './i-meteoDaily';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  METEO_DAILY: string = environment.METEO_DAILY;

  constructor ( private http: HttpClient) { }

  getMeteoDaily():Observable<IMeteoDaily>{
    return this.http.get<IMeteoDaily>(this.METEO_DAILY)
  }


}



