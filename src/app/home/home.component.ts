import { Component, inject, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';
import { IMeteo } from '../i-meteo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  datiDiTest: string[] = []
  meteoTest!: IMeteo;
  datiSvc: SvcService = inject(SvcService)
  constructor () {
    this.datiDiTest = this.datiSvc.getDatiTest()
  }

  ngOnInit(): void {
    this.datiSvc.getMeteoTest().subscribe(
      dati => this.meteoTest = dati
    )
  }
}


