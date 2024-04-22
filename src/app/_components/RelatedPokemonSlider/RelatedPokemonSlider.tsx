import { getPokemonByType } from "@/app/_lib/pokemonAPI";

export const RelatedPokemonSlider = async ({
  pokemonTypes,
}: {
  pokemonTypes: any;
}) => {
  const relatedPokemon = await Promise.all(
    pokemonTypes.map(async (type: any) => {
      return await getPokemonByType(type);
    })
  );

  const pokemonNames = relatedPokemon
    .map((type) => type.pokemon)
    .flat()
    .map((pokemon) => pokemon.pokemon.name);

  return (
    <div>
      {pokemonNames.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};
