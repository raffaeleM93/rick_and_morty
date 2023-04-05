import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../core/app-routing.module';
import { AppComponent } from '../core/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

/* Components */
import { NavbarComponent } from '../features/components/navbar/navbar.component';
import { RicercaComponent } from '../features/components/ricerca/ricerca.component';
import { PaginatorComponent } from '../features/components/paginator/paginator.component';
import { ListaPersonaggiComponent } from '../features/components/personaggi/lista-personaggi/lista-personaggi.component';
import { DettagliPersonaggioComponent } from '../features/components/personaggi/dettagli-personaggio/dettagli-personaggio.component';

/* Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RicercaComponent,
    PaginatorComponent,
    ListaPersonaggiComponent,
    DettagliPersonaggioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
