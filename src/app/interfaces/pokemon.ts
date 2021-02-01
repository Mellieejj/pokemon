export interface Response {
  count: number;
  next: string;
  previous: string;
  results: ResponseResult[];
}

export interface ResponseResult {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: Sprites; //todo: find out what type {} this is. 
  species: ResponseResult;
  stats: [];
  types: [];
}

interface Sprites {
  [propName: string]: string;
}

export interface Generation {
  id: number;
  name: string;
  abilities: [];
  names: [];
  main_region: ResponseResult;
  moves: [];
  pokemon_species: [];
  types: [];
  version_groups: ResponseResult[];
}

export interface Region {
  id: number;
  region: string;
  pokemons?: ResponseResult[];
  pokemonsData?: PokemonData[];
}
