import { Component, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { SvcService } from '../svc.service';
import { IMeteoDaily } from '../i-meteoDaily';
import { MeteoNow } from '../i-meteoNow';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnChanges{

  meteoDaily!: IMeteoDaily;
  meteoNow!: MeteoNow;
  @Input() latitude!: number;
  @Input() longitude!:number;
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

  ngOnChanges(changes: SimpleChanges){
    if (changes['latitude'] || changes['longitude']){
      console.log("CAMBIATE!");

      this.getMeteo()

    }
  }
  getMeteo():void{
    this.datiSvc.getMeteoDaily(this.latitude, this.longitude).subscribe(dati => {
      this.meteoDaily= dati
      console.log(dati);

    }
    )
  }
}


