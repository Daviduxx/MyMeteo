import { IMeteoDaily } from './i-meteoDaily';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { MeteoNow } from './i-meteoNow';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  METEO_DAILY: string = environment.METEO_DAILY;
  METEO_NOW: string = environment.METEO_NOW

  constructor ( private http: HttpClient) { }

  getMeteoDaily():Observable<IMeteoDaily>{
    return this.http.get<IMeteoDaily>(this.METEO_DAILY)
  }

  getMeteoNow():Observable<MeteoNow>{
    return this.http.get<MeteoNow>(this.METEO_NOW)
  }


}



