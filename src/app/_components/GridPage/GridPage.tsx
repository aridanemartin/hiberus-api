import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../../page.module.css";

export const GridPage = ({ data }) => {
  return (
    <>
      {data.results.map((pokemon) => (
        <Link
          href={`pokemon/${pokemon.name}`}
          key={pokemon.name}
          className={styles.card}
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
        </Link>
      ))}
    </>
  );
};
