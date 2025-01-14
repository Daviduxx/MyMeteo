import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  constructor () {}

  public datiDiTest:string[] = ['cloudy', 'sunny', 'foggy', 'rainy']

  getDatiTest():string[] {
  return this.datiDiTest;
}

  getDatiTestById(id:number): string {
    return this.datiDiTest[id]
  }
}



