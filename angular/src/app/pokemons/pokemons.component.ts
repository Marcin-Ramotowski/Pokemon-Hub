import { Component } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Result } from "../interfaces";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent {

  pokemons: Result[] = [];

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .then(pokemons => this.pokemons = pokemons.results)
      .catch(error => console.error(error));
  }

  getPokemonUrl(url: string): string {
    const id = url.match(/\/(\d+)\/$/)?.[1];
    return `/detail/${id}`
  }

  getImgUrl(url: string): string {
    const id = url.match(/\/(\d+)\/$/)?.[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
}
