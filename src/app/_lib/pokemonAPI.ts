import { PokemonList } from "../_interfaces/pokemon/pokemon";

const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await response.json();
  return data;
}

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}

export async function getPokemonByType(type: string): Promise<PokemonList> {
  const url = POKEMON_API + "type/" + type;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
