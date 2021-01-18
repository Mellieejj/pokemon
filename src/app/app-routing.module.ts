import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPokemonsListComponent } from './all-pokemons-list/all-pokemons-list.component';
import { HomeComponent } from './home/home.component';
import { RegionListComponent } from './region-list/region-list.component';
import { StarterPokemonsListComponent } from './starter-pokemons-list/starter-pokemons-list.component';

const routes: Routes = [
  {path: 'all-pokemons', component: AllPokemonsListComponent},
  {path: 'starter-pokemons', component: StarterPokemonsListComponent},
  {path: 'regions', component: RegionListComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
