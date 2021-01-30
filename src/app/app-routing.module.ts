import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPokemonsListComponent } from './all-pokemons-list/all-pokemons-list.component';
import { StarterPokemonsListComponent } from './starter-pokemons-list/starter-pokemons-list.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: 'all-pokemons', component: AllPokemonsListComponent},
  {path: 'starter-pokemons', component: StarterPokemonsListComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
