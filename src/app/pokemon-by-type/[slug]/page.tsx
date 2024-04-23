import { GridPage } from "@/app/_components/GridPage/GridPage";
import { Layout } from "@/app/_components/Layout/Layout";
import { PokemonData } from "@/app/_interfaces/pokemon/pokemon";
import { getPokemonByType, getPokemonList } from "@/app/_lib/pokemonAPI";
import React from "react";

const PokemonByType = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const pokemonByType = await getPokemonByType(slug);

  function adaptPokemonArray(pokemonArray: PokemonData[]) {
    return pokemonArray.map((obj) => ({
      name: obj.pokemon.name,
      url: obj.pokemon.url,
    }));
  }

  const pokemonResults = adaptPokemonArray(pokemonByType.pokemon);

  const pokemonResult = {
    count: pokemonByType.pokemon.length,
    results: pokemonResults,
  };

  return (
    <Layout maxWidth={1100}>
      <h1>Pokémon of type {slug}</h1>
      <GridPage data={pokemonResult} />
    </Layout>
  );
};

export default PokemonByType;
