import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaggiComponent } from '../features/components/personaggi/lista-personaggi/lista-personaggi.component';
import { DettagliPersonaggioComponent } from '../features/components/personaggi/dettagli-personaggio/dettagli-personaggio.component';

const routes: Routes = [
  { path: '', redirectTo: 'personaggi/pag/1', pathMatch: 'full' },
  { path: 'personaggi/pag/1', component: ListaPersonaggiComponent },
  { path: 'personaggi/pag/:num', component: ListaPersonaggiComponent },
  { path: 'dettagli/personaggio/:id',component: DettagliPersonaggioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
