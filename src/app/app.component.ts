import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SvcService } from './svc.service';
import { MeteoNow } from './i-meteoNow';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  findCity!: FormGroup

  constructor ( private svc: SvcService ) { }

  ngOnInit(): void {

        this.findCity = new FormGroup( {
          city: new FormControl('Turin', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
        })

        this.svc.getCoords().subscribe(c => {
          this.latitude = c.latitude
          this.longitude = c.longitude
          this.svc.getMeteoNow(this.latitude, this.longitude).subscribe(dati => {
            this.meteoNow = dati
          })
        })

      }

      onSubmit(){
         this.svc.getGeocode(this.findCity.value.city).subscribe(coords => {
          console.log(coords);
           this.latitude = coords[0].latitude
           this.longitude = coords[0].longitude
           this.svc.getMeteoNow(this.latitude, this.longitude).subscribe(
      dati => {
        this.meteoNow = dati
        console.log(dati);

      }
    )

        })

      }


  }


