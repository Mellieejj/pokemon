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
  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.allPokemons();
  }

  allPokemons() {
    this.PokemonsService.getAllPokemons().subscribe(
      (response: {
        count: string;
        next: string;
        previous: string;
        results: [];
      }) =>
        response.results.forEach((p: { name: string; url: string }) =>
          this.PokemonsService.getPokemonData(p.name).subscribe(
            (pokemon: any) =>
              (this.pokemons = [...this.pokemons, pokemon].sort(
                (a, b) => a.id - b.id
              ))
          )
        )
    );
  }
}
