import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Pokémon App';
  navItems: { name: string; location: string }[] = [
    {
      name: 'Home',
      location: '',
    },
    {
      name: 'All Pokémons',
      location: 'all-pokemons',
    },
    {
      name: 'Starter Pokémons',
      location: 'starter-pokemons',
    },
  ];
  toggleChecked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeEvent(event): void {
    this.toggleChecked = event.target.checked;
  }
}
