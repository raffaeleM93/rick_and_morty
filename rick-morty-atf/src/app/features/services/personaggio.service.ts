import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personaggio } from '../interfaces/personaggio';

@Injectable({
  providedIn: 'root'
})
export class PersonaggioService {

  constructor(private http: HttpClient) { }

  invokeEvent: Subject<any> = new Subject(); 

  /**
   * METODI COMUNICAZIONE paginator <-> lista-personaggi
   */

  getPersonaggiPrevPage(){ // Pagina precedente
    this.invokeEvent.next(1)
  }

  getPersonaggiNextPage() { // Pagina successiva
    this.invokeEvent.next(2);      
  }

  getFirstPage(){
    this.invokeEvent.next('f'); // Pagina iniziale
  }

  getLastPage(){
    this.invokeEvent.next('e'); // Ultima pagina
  }

  disableRicercaPaginator(){
    this.invokeEvent.next('rp'); // rimuovi componente Ricerca & Paginator
  }

  /**
   * Recupera i personaggi by url
   * Metodo: GET
   */
  getPersonaggioByUrl(url: string){
    return this.http.get<Personaggio>(url)
  }
}
