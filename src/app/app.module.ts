import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPokemonsListComponent } from './all-pokemons-list/all-pokemons-list.component';
import { StarterPokemonsListComponent } from './starter-pokemons-list/starter-pokemons-list.component';
import { RegionListComponent } from './region-list/region-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPokemonsListComponent,
    StarterPokemonsListComponent,
    RegionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
