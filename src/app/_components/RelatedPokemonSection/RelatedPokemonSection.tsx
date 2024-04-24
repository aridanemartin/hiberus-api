import { getPokemon, getPokemonByType } from "@/app/_lib/pokemonAPI";
import Image from "next/image";
import styles from "./RelatedPokemonSection.module.css";
import Link from "next/link";
import { PokemonData, PokemonType } from "@/app/_interfaces/pokemon/pokemon";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";
import { Spinner } from "../Spinner/Spinner";

export const RelatedPokemonSection = async ({
  pokemonTypes,
}: {
  pokemonTypes: PokemonType[];
}) => {
  const relatedPokemon = await Promise.all(
    pokemonTypes.map(async (type: PokemonType) => {
      return await getPokemonByType(type.type.name);
    })
  );

  //merge the pokemon names that are on more than one type
  const mergedPokemonListFromTypes = relatedPokemon
    .map((pokemon) => pokemon.pokemon)
    .flat()
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr.pokemon.name)) {
        acc.push(curr.pokemon.name);
      }
      return acc;
    }, [])
    .slice(0, 3);

  return (
    <section className={styles.container}>
      {mergedPokemonListFromTypes.map(async (name) => {
        const pokemonDetail = await getPokemon(name);
        return (
          <Link
            key={`relatedPokemon-${name}`}
            href={`/detail/${pokemonDetail.name}`}
          >
            <article className={styles.card}>
              <Image
                key={name}
                src={pokemonDetail.sprites.front_default}
                alt={name}
                width={100}
                height={100}
              />
              <p className={styles.pokemonName} key={name}>
                {capitalizeFirstLetter(name)}
              </p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};
