import { Component, Input, OnInit } from '@angular/core';
import { type } from 'os';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() {}

  ngOnInit(): void {}

  typeColors(type: string) {
    switch (type) {
      case 'normal':
        return {
          'background-color': '#a4acaf',
        };
      case 'fighting':
        return {
          'background-color': '#d56723',
          color: '#f1f1f1'
        };
      case 'fire':
        return {
          'background-color': '#eb7921',
        };
      case 'water':
        return {
          'background-color': '#4591c4',
          color: '#f1f1f1'
        };
      case 'poison':
        return {
          'background-color': '#b97fc9',
        };
      case 'rock':
        return {
          'background-color': '#a28b21',
        };
      case 'bug':
        return {
          'background-color': '#729f3f',
        };
      case 'ghost':
        return {
          'background-color': '#7a62a3',
          color: '#f1f1f1'
        };
      case 'steel':
        return {
          'background-color': '#9fb8b9',
        };
      case 'grass':
        return {
          'background-color': '#9bcc50',
        };
      case 'electric':
        return {
          'background-color': '#eed535',
        };
      case 'psychic':
        return {
          'background-color': '#e36ab9',
        };
      case 'ice':
        return {
          'background-color': '#5cc4e7',
        };
      case 'dark':
        return {
          'background-color': '#707070',
          color: '#f1f1f1'
        };
      case 'fairy':
        return {
          'background-color': '#edb7e9',
        };
      case 'flying':
        return {
          background: 'linear-gradient(180deg, #5dc8ef 50%, #bdb8b8 50%)',
        };
      case 'ground':
        return {
          background: 'linear-gradient(180deg, #f7dd3f 50%, #ab9842 50%)',
        };
      case 'dragon':
        return {
          background: 'linear-gradient(180deg, #53a4cf 50%, #e86c57 50%)',
          color: '#f1f1f1'
        };
      default:
        break;
    }
  }
}
