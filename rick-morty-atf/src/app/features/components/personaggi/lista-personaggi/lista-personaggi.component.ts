import { Component } from '@angular/core';
import { Info } from 'src/app/features/interfaces/info';
import { Personaggio } from 'src/app/features/interfaces/personaggio';
import { PersonaggioService } from 'src/app/features/services/personaggio.service';

const FIRST_PAGE_RICKMORTY_ENDPOINT = 'https://rickandmortyapi.com/api/character/?page=1'
const LAST_PAGE_RICKMORTY_ENDPOINT = 'https://rickandmortyapi.com/api/character/?page=42'

@Component({
  selector: 'app-lista-personaggi',
  templateUrl: './lista-personaggi.component.html',
  styleUrls: ['./lista-personaggi.component.scss']
})

export class ListaPersonaggiComponent {

  /* Array Personaggi API */
  personaggi: Personaggio[] = [];

  /* Info pagina successiva-precedente */
  pageInfo: Info = {
    next: null,
    prev: null,
  }

  /* Costruttore */
  constructor(
    private _personaggioService: PersonaggioService,
  ) {
    this._personaggioService.invokeEvent.subscribe(value => {
      if (value === 'f') { // Prima pagina
        this.getFirstPagePersonaggi();
      }
      else if (value === 'e') { // Ultima pagina
        this.getLastPagePersonaggi();
      }
      else if (value === 1) { // Pagina precedente
        this.getPersonaggiPrevPage();
      }
      else if (value === 2) { // Pagina successiva
        this.getPersonaggiNextPage();
      }
    });
  }

  ngOnInit(): void {
    this.getFirstPagePersonaggi()
  }

  /* Recupera Info e Results dalle API della pag.1*/
  private getFirstPagePersonaggi(): void {

    this._personaggioService.getPersonaggioByUrl(FIRST_PAGE_RICKMORTY_ENDPOINT)
      .subscribe((personaggi: any) => {

        if (personaggi?.results?.length) {
          const { info, results } = personaggi;
          this.personaggi.splice(0); // svuoto l'array dei personaggi
          this.personaggi = [...results];
          this.pageInfo = info;
        }
        else {
          this.personaggi = []
        }
      })
  }

  /* Recupera personaggi pagina successiva */
  private getPersonaggiNextPage(): void {

    this._personaggioService.getPersonaggioByUrl(this.pageInfo.next)
      .subscribe((personaggi: any) => {

        if (personaggi?.results?.length) {
          const { info, results } = personaggi;
          this.personaggi.splice(0); // svuoto l'array dei personaggi
          this.personaggi = [...results];
          this.pageInfo = info;
        }
        else {
          this.personaggi = []
        }
      })
  }

  /* Recupera personaggi pagina precedente */
  private getPersonaggiPrevPage(): void {

    this._personaggioService.getPersonaggioByUrl(this.pageInfo.prev)
      .subscribe((personaggi: any) => {

        if (personaggi?.results?.length) {
          const { info, results } = personaggi;
          this.personaggi.splice(0); // svuoto l'array dei personaggi
          this.personaggi = [...results];
          this.pageInfo = info;
        }
        else {
          this.personaggi = []
        }
      })
  }

  /* Recupera personaggi ultima pagina */
  private getLastPagePersonaggi(): void {

    this._personaggioService.getPersonaggioByUrl(LAST_PAGE_RICKMORTY_ENDPOINT)
      .subscribe((personaggi: any) => {

        if (personaggi?.results?.length) {
          const { info, results } = personaggi;
          this.personaggi.splice(0); // svuoto l'array dei personaggi
          this.personaggi = [...results];
          this.pageInfo = info;
        }
        else {
          this.personaggi = []
        }
      })
  }

  /* Check lunghezza nome personaggio */
  private handleName(name: string): string {
    if (name.length > 16) {
      return this.truncateName(name);
    }
    else {
      return name;
    }
  }

  /* Metodo per troncamento nome personaggio */
  private truncateName(name: string): string {
    return name.slice(0, -(name.length-16)).concat('...');
  }
}
