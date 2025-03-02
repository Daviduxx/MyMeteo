import { Component, inject, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';
import { IMeteoDaily } from '../i-meteoDaily';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  meteoDaily!: IMeteoDaily;
  datiSvc: SvcService = inject(SvcService)
  constructor () { }

  ngOnInit(): void {
    this.datiSvc.getMeteoDaily().subscribe(
      dati => this.meteoDaily = dati
    )
  }
}


