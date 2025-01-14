import { Component, inject } from '@angular/core';
import { SvcService } from '../svc.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  datiDiTest: string[] = []
  datiSvc: SvcService = inject(SvcService)
  constructor () {
    this.datiDiTest = this.datiSvc.getDatiTest()
  }
}


