import { Component, inject, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';
import { IMeteoDaily } from '../i-meteoDaily';
import { MeteoNow } from '../i-meteoNow';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  meteoDaily!: IMeteoDaily;
  meteoNow!: MeteoNow;
  latitude:number = 0
  longitude:number = 0
  datiSvc: SvcService = inject(SvcService)

  constructor () { }

  ngOnInit(): void {

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( position => {
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;

       this.getMeteo()
    })


  }

  }
  getMeteo():void{
    this.datiSvc.getMeteoDaily(this.latitude, this.longitude).subscribe(
      dati => this.meteoDaily= dati
    )
  }
}


