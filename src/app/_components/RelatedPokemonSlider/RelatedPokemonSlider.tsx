import { getPokemonType } from "@/app/_lib/pokemonAPI";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const RelatedPokemonSlider = async ({ pokemonTypes }) => {
  const relatedPokemon = await Promise.all(
    pokemonTypes.map(async (type) => {
      return await getPokemonType(type);
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