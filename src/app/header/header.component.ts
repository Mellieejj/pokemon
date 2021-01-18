import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Pokémon App';
  navItems: { name: string; location: string }[] = [
    {
      name: 'All Pokémons',
      location: 'all-pokemons',
    },
    {
      name: 'Starter Pokémons',
      location: 'starter-pokemons',
    },
    {
      name: 'Regions',
      location: 'regions',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
