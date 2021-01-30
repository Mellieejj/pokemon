import { Component, Input, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd){
        this.toggleChecked = false;
      }
    })
  }

  ngOnInit(): void {}

  changeEvent(event): void {
    this.toggleChecked = event.target.checked;
  }
}
