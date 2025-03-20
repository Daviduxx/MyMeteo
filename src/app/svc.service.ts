import { IMeteoDaily } from './i-meteoDaily';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getMeteoDaily(latitude:number, longitude:number):Observable<IMeteoDaily>{
    let params = new HttpParams()
    .set('latitude', latitude)
    .set('longitude', longitude)
    return this.http.get<IMeteoDaily>(this.METEO_DAILY, { params })
  }

  getMeteoNow(latitude:number, longitude:number):Observable<MeteoNow>{
    let params = new HttpParams()
    .set('latitude', latitude)
    .set('longitude', longitude)
    return this.http.get<MeteoNow>(this.METEO_NOW, { params })
  }


}



