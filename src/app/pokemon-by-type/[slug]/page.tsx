import { GridPage } from "@/app/_components/GridPage/GridPage";
import { Layout } from "@/app/_components/Layout/Layout";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";
import { PokemonData } from "@/app/_interfaces/pokemon/pokemon";
import { getPokemonByType, getPokemonList } from "@/app/_lib/pokemonAPI";
import React from "react";
import styles from "./PokemonByType.module.css";
import Link from "next/link";
import Image from "next/image";
import backButton from "@/app/_assets/icons/back.png";

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
    <Layout maxWidth={750}>
      <div className={styles.header}>
        <Link className={styles.closeButton} href="/">
          <Image src={backButton} alt="Close" width={20} height={20} />
        </Link>
        <h1 className={styles.title}>
          Pokémon of type {capitalizeFirstLetter(slug)}
        </h1>
      </div>
      <GridPage data={pokemonResult} />
    </Layout>
  );
};

export default PokemonByType;
