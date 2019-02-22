import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveListeComponent } from './components/eleve-liste/eleve-liste.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateEleveComponent } from './components/create-eleve/create-eleve.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: EleveListeComponent },
  { path: 'create', component: CreateEleveComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
