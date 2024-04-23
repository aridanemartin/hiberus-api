export interface PokemonData {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface PokemonList {
  pokemon: PokemonData[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

///

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: any[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  // TBD
}

interface GameIndex {
  // TBD
}

interface Move {
  // TBD
}

export interface Stat {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

interface TypeDetail {
  name: string;
}

interface Type {
  type: TypeDetail;
}
