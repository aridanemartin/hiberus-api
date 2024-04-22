"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./GridPage.module.css";
import { getPokemon } from "@/app/_lib/pokemonAPI";
import { PokemonResult } from "@/app/_interfaces/pokemon/pokemon";
import DetailsModal from "../DetailsModal/DetailsModal";

export const GridPage = ({ data }: { data: { results: PokemonResult[] } }) => {
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);

  const handlePokemonClick = async (pokemon: PokemonResult) => {
    const selectedPokemon = await getPokemon(pokemon.name);
    setSelectedPokemonName(selectedPokemon);
  };

  const onCloseModal = () => {
    setSelectedPokemonName(null);
  };

  return (
    <section className={styles.container}>
      {data.results.map((pokemon: PokemonResult) => (
        <div
          onClick={() => handlePokemonClick(pokemon)}
          className={styles.card}
          key={pokemon.name}
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              pokemon.url.split("/")[6]
            }.png`}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          <h2>{pokemon.name}</h2>
        </div>
      ))}
      {selectedPokemonName && (
        <DetailsModal pokemon={selectedPokemonName} onClose={onCloseModal} />
      )}
    </section>
  );
};
