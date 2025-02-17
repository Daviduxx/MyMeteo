import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IMeteo } from './i-meteo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  METEO_API_TEST: string = environment.METEO_TEST;

  constructor ( private http: HttpClient) { }

  public datiDiTest:string[] = ['cloudy', 'sunny', 'foggy', 'rainy']

  getDatiTest():string[] {
  return this.datiDiTest;
}

  getDatiTestById(id:number): string {
    return this.datiDiTest[id]
  }

  getMeteoTest(): Observable<IMeteo> {
    return this.http.get<IMeteo>(this.METEO_API_TEST);
  }


}



