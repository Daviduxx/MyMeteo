import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SvcService } from './svc.service';
import { MeteoNow } from './i-meteoNow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
//  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'MyMeteo';
  meteoNow!: MeteoNow;
  latitude:number = 0
  longitude:number = 0

  constructor ( private svc: SvcService ) { }

  ngOnInit(): void {

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        p => {
        this.latitude = p.coords.latitude
        this.longitude = p.coords.longitude
        console.log(this.latitude);
        console.log(this.longitude);

          this.svc.getMeteoNow(this.latitude, this.longitude).subscribe(
      dati => {
        this.meteoNow = dati
        console.log(dati);

      }
    )
      })
    }
  }
}


