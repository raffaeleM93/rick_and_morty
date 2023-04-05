import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaggio } from 'src/app/features/interfaces/personaggio';
import { PersonaggioService } from 'src/app/features/services/personaggio.service';
import { Location } from '@angular/common';

const RICKMORTY_ENDPOINT = 'https://rickandmortyapi.com/api/character/'

@Component({
  selector: 'app-dettagli-personaggio',
  templateUrl: './dettagli-personaggio.component.html',
  styleUrls: ['./dettagli-personaggio.component.scss']
})
export class DettagliPersonaggioComponent implements OnInit, OnDestroy {

  idPersonaggio: number;

  /* Array Personaggi API */
  dettagliPersonaggio: Personaggio[] = [];

  constructor(
    private route: ActivatedRoute,
    private _personaggioService: PersonaggioService,
    private location: Location
  ) { }

  /* ngOnInit */
  ngOnInit(): void {
    this.idPersonaggio = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDettagliPersonaggio();
    this._personaggioService.disableRicercaPaginator();
    console.log(this.dettagliPersonaggio);
  }

  /* Recupera info personaggio */
  private getDettagliPersonaggio(): void {

    this._personaggioService.getPersonaggioByUrl(RICKMORTY_ENDPOINT + this.idPersonaggio)
      .subscribe((dettagli: Personaggio) => {
        this.dettagliPersonaggio.splice(0); // svuoto l'array dei personaggi
        this.dettagliPersonaggio.push(dettagli);
      })
  }

  public getNumEpisodi(): number {
    return this.dettagliPersonaggio[0].episode.length;
  }

  public indietro(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this._personaggioService.disableRicercaPaginator();
  }
}
