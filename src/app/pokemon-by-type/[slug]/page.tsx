import { getPokemonByType } from "@/app/_lib/pokemonAPI";
import React from "react";

const PokemonByType = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const pokemon = await getPokemonByType(slug);

  return (
    <>
      {pokemon.pokemon.map((pokemon) => (
        <div key={pokemon.pokemon.name}>{pokemon.pokemon.name}</div>
      ))}
    </>
  );
};

export default PokemonByType;
