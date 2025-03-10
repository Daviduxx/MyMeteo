import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SvcService } from './svc.service';
import { MeteoNow } from './i-meteoNow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'MyMeteo';
  meteoNow!: MeteoNow;

  constructor ( private svc: SvcService ) { }

  ngOnInit(): void {
     this.svc.getMeteoNow().subscribe(
      dati => this.meteoNow = dati
    )
  }
}


