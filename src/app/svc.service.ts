import { IMeteoDaily } from './i-meteoDaily';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { MeteoNow } from './i-meteoNow';
import { Igeocode } from './igeocode';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  METEO_DAILY: string = environment.METEO_DAILY;
  METEO_NOW: string = environment.METEO_NOW
  GEOCODE: string = environment.GEOCODING

  API_KEY: string = environment.APIKEY

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

  getGeocode(city: string):Observable<Igeocode[]>{
    let params = new HttpParams()
    .set('city', city)
    let headers = new HttpHeaders()
    .set('X-Api-Key', this.API_KEY)

    return this.http.get<Igeocode[]>(this.GEOCODE, { headers, params })
  }


}



