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

  getPokemonId(url: string): string {
    const lastIndex = url.slice(0, -1).lastIndexOf('/')
    const id = Number(url.slice(lastIndex+1,-1));
    return `/detail/${id}`
  }
}
