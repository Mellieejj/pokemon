import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-all-pokemons-list',
  templateUrl: './all-pokemons-list.component.html',
  styleUrls: ['./all-pokemons-list.component.scss']
})
export class AllPokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      name: 'Pikachu',
      id: 5
    },
    {
      name: 'Snorlax',
      id: 4
    },
    {
      name: 'Slowpoke',
      id: 3
    },
    {
      name: 'Charmander',
      id: 2
    },
    {
      name: 'Bulbasaur',
      id: 1
    }
  ]
  constructor(private PokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }

}
