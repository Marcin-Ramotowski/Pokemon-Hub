import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../interfaces";


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  pokemon: Pokemon = {id: 0, name: '', base_experience: 0, weight:0, height:0};

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

    ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemonService.getPokemonDetail(id)
      .then(pokemon => this.pokemon = pokemon);
  }
}
