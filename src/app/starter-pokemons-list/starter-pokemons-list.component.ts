import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-starter-pokemons-list',
  templateUrl: './starter-pokemons-list.component.html',
  styleUrls: ['./starter-pokemons-list.component.scss']
})

export class StarterPokemonsListComponent implements OnInit {
  starterPokemons: any[] = []

  constructor(private PokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.PokemonsService.getGenerationList()
    .subscribe((response: any) => {
      response.results.forEach((p:any) => {
        const id = p.url.slice(p.url.length-2, p.url.length-1)
        this.PokemonsService.getGenerationPokemons(id)
          .subscribe((generation: any) => {
            console.log(generation['main_region'].name)
            generation['pokemon_species'].slice(0, 3).forEach(p => {
              this.PokemonsService.getPokemonData(p.name).subscribe(pokemon => {
                this.starterPokemons = [...this.starterPokemons, pokemon].sort((a, b) => a.id - b.id)
              })
            })
          })
      })
    })
  }
}
