import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-starter-pokemons-list',
  templateUrl: './starter-pokemons-list.component.html',
  styleUrls: ['./starter-pokemons-list.component.scss'],
})
export class StarterPokemonsListComponent implements OnInit {
  starterPokemons: any[] = [];
  regions: any[] = [];

  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.getRegionsData();
    
  }
  
  getRegionsData() {
    this.PokemonsService.getGenerationList().subscribe((response: any) => {
      response.results.forEach((generation: any) => {
        const id = generation.url.slice(
          generation.url.length - 2,
          generation.url.length - 1
          );
          this.PokemonsService.getGenerationPokemons(id).subscribe(
            (generation: any) => {
              this.regions = [
                ...this.regions,
                {
                  region: generation['main_region'].name,
                  pokemons: generation['pokemon_species'].slice(0, 3),
                },
              ];

             this.regions = this.regions.map(region => {
                const pokemons = region.pokemons
                let pokemonsData = []
                pokemons.forEach(p => this.PokemonsService.getPokemonData(p.name).subscribe(data => pokemonsData.push(data)

                ))
                
                return {...region, pokemonsData}
              })
              
             }
            );
            
      });
    });
  }
}
