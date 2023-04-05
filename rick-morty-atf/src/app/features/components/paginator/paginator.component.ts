import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { PersonaggioService } from '../../services/personaggio.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent {

  /* Offset pagina iniziale */
  pageYoffset = 0;
  /* Contatore pagina */
  pageCounter = 1;

  disableInizio: boolean = true;
  disableFine: boolean = false;
  disablePrev: boolean = true;
  disableNext: boolean = false;

  /* Costruttore */
  constructor(
    private scroll: ViewportScroller,
    private _personaggioService: PersonaggioService,
  ) { }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  /* Torna a inizio pagina */
  tornaSu(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

  /* Pagina successiva */
  nextPage(): void {
    if (this.pageCounter > 0) {
      this.disableInizio = false;
      this.disablePrev = false;
    }
    
    if (this.pageCounter === 41) {
      this.disableFine = true;
      this.disableNext = true;
    }

    if (this.pageCounter >= 1 && this.pageCounter < 42) {
      this._personaggioService.getPersonaggiNextPage();
      this.pageCounter++;
    }
  }

  /* Pagina precedente */
  prevPage(): void {
    if (this.pageCounter === 42) {
      this.disableFine = false;
      this.disableNext = false;
    }

    if (this.pageCounter === 2) {
      this.disableInizio = true;
      this.disablePrev = true;
    }

    if (this.pageCounter > 1 && this.pageCounter <= 42) {
      this._personaggioService.getPersonaggiPrevPage();
      this.pageCounter--;
    }

    console.log('Prev', this.pageCounter);
  }

  /* Prima pagina */
  firstPage(): void {
    this._personaggioService.getFirstPage();
    this.disableInizio = true;
    this.disableNext = false;
    this.disableFine = false;
    this.disablePrev = true;
    this.pageCounter = 1;
  }

  /* Ultima pagina */
  lastPage(): void {
    this._personaggioService.getLastPage();
    this.disableInizio = false;
    this.disablePrev = false;
    this.disableFine = true;
    this.disableNext = true;
    this.pageCounter = 42;
  }  
}

