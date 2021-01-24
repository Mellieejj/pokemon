import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`)
  }

  getPokemonData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getGenerationList(){
    return this.http.get(`https://pokeapi.co/api/v2/generation/`)
  }

  getGenerationPokemons(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/generation/${id}`)
  }
}
