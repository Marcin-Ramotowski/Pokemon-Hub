import { Injectable } from '@angular/core';
import { Pokemon, Results } from "./interfaces";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor() { }

  getPokemons(): Promise<Results> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then(response => response.json());
  }

  getPokemonDetail(pokemonID: number): Promise<Pokemon>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(response => response.json());
  }
}
