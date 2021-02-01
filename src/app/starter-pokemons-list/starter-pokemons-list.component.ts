import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Response, ResponseResult, Generation, Region, PokemonData } from '../interfaces/pokemon';

@Component({
  selector: 'app-starter-pokemons-list',
  templateUrl: './starter-pokemons-list.component.html',
  styleUrls: ['./starter-pokemons-list.component.scss'],
})
export class StarterPokemonsListComponent implements OnInit {
  regions: Region[] = [];
  selectedRegion: Region;

  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.getRegionsData();
  }

  getRegionsData(): void {
    this.PokemonsService.getGenerationList().subscribe((response: Response) => {
      response.results.forEach((generation: ResponseResult) => {
        const id: number = parseInt(generation.url.slice(
          generation.url.length - 2,
          generation.url.length - 1
        ));

        this.PokemonsService.getGenerationPokemons(id).subscribe(
          (generation: Generation) => {
            this.regions = [
              ...this.regions,
              {
                id: generation.id,
                region: generation['main_region'].name,
                pokemons: generation['pokemon_species'].slice(0, 3),
              },
            ].sort((a, b) => a.id - b.id);

            this.regions = this.regions.map((region: Region) => {
              const pokemonsData: PokemonData[] = [];
              region.pokemons.forEach((p: ResponseResult) => {
                this.PokemonsService.getPokemonData(
                  p.name
                ).subscribe((data: PokemonData) => pokemonsData.push(data))
                });

              return { ...region, pokemonsData: pokemonsData };
            });
          }
        );
      });
    });
  }

  onRegionSelect(region: Region): void {
    this.selectedRegion = region;
  }
}
