import { Component, OnInit } from '@angular/core';
import { PokemonData, ResponseResult, Response } from '../interfaces/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-all-pokemons-list',
  templateUrl: './all-pokemons-list.component.html',
  styleUrls: ['./all-pokemons-list.component.scss'],
})

export class AllPokemonsListComponent implements OnInit {
  pokemons: PokemonData[] = [];
  page: number = 1;
  totalPokemons: number;
  
  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.allPokemons();
  }

  allPokemons() {
    this.PokemonsService.getAllPokemons(25, ((this.page-1) * 25)).subscribe(
      (response: Response) => {
        this.totalPokemons = response.count;
        response.results.forEach((p: ResponseResult) =>
          this.PokemonsService.getPokemonData(p.name).subscribe(
            (pokemon: PokemonData) =>
              (this.pokemons = [...this.pokemons, pokemon].sort(
                (a, b) => a.id - b.id
              ))
          )
        );
      }
    );
  }

  handlePageEvent(eventPage: number){
    this.page = eventPage; 
    this.pokemons = []; 
    this.allPokemons();
  }
}
