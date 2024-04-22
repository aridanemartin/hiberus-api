"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./GridPage.module.css";
import { getPokemon } from "@/app/_lib/pokemonAPI";
import { ProgressBar } from "../ProgressBar/ProgressBar";

const Modal = ({ pokemon, onClose }) => {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>{pokemon.name}</h1>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        {pokemon.stats.map((stat) => (
          <ProgressBar
            key={stat.stat.name}
            stat={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export const GridPage = ({ data }) => {
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);

  const handlePokemonClick = async (pokemon) => {
    const selectedPokemon = await getPokemon(pokemon.name);
    setSelectedPokemonName(selectedPokemon);
  };

  const onCloseModal = () => {
    setSelectedPokemonName(null);
  };

  return (
    <>
      {data.results.map((pokemon) => (
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
        <Modal pokemon={selectedPokemonName} onClose={onCloseModal} />
      )}
    </>
  );
};
