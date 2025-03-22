import { Component, OnInit, NgModule } from '@angular/core';
import { SvcService } from '../svc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  city:string = "Torino"

  constructor ( private svc: SvcService ) { }

  ngOnInit(): void {

    this.svc.getGeocode(this.city).subscribe(coords => {
      console.log(coords);

    })
  }

}
