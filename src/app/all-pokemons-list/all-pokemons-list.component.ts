import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-all-pokemons-list',
  templateUrl: './all-pokemons-list.component.html',
  styleUrls: ['./all-pokemons-list.component.scss'],
})
export class AllPokemonsListComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number;
  
  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.allPokemons();
  }

  allPokemons() {
    this.PokemonsService.getAllPokemons(25, ((this.page-1) *25)).subscribe(
      (response: {
        count: number;
        next: string;
        previous: string;
        results: [];
      }) => {
        this.totalPokemons = response.count;
        response.results.forEach((p: { name: string; url: string }) =>
          this.PokemonsService.getPokemonData(p.name).subscribe(
            (pokemon: any) =>
              (this.pokemons = [...this.pokemons, pokemon].sort(
                (a, b) => a.id - b.id
              ))
          )
        );
      }
    );
  }

  handlePageEvent(event){
    this.page = event; 
    this.pokemons = []; 
    this.allPokemons();
  }
}
