// export interface Pokemon {
//   id: number;
//   name: string;
//   type: string;
//   imageUrl: string;
// }

export interface PokemonData {
  pokemon: {
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
  forms: any[]; // The structure of forms is not specified in the provided data
  game_indices: GameIndex[];
  height: number;
  held_items: any[]; // The structure of held_items is not specified in the provided data
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[]; // The structure of past_abilities is not specified in the provided data
  past_types: any[]; // The structure of past_types is not specified in the provided data
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
