import { Component } from '@angular/core';
import { PersonaggioService } from '../features/services/personaggio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  disableRP: boolean = false;
  
  title = 'rick-morty-atf';

  constructor(
    private _personaggioService: PersonaggioService
  ) {
    this._personaggioService.invokeEvent.subscribe(value => {
      if (value === 'rp')
        this.disableRP = !this.disableRP;
    });
  }

}
