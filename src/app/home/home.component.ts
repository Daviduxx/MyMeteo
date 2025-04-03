import { Component, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { SvcService } from '../svc.service';
import { IMeteoDaily } from '../i-meteoDaily';
import { MeteoNow } from '../i-meteoNow';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnChanges{

  meteoDaily!: IMeteoDaily;
  meteoNow!: MeteoNow;
  latitude: number = 0
  longitude:number = 0
  datiSvc: SvcService = inject(SvcService)

  constructor () { }

  ngOnInit(): void {

      this.datiSvc.getCoords().subscribe(c => {
          this.latitude = c.latitude
          this.longitude = c.longitude
          this.datiSvc.getMeteoDaily(this.latitude, this.longitude).subscribe(dati => {
            this.meteoDaily = dati
          })
        })


  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['latitude'] || changes['longitude']){
      this.latitude = changes['latitude'].currentValue
      console.log("CAMBIATE!");
      this.getMeteo()
    }
    else{
      console.log("NON CAMBIO NIENTE");

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


