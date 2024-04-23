import { getPokemon, getPokemonByType } from "@/app/_lib/pokemonAPI";
import Image from "next/image";
import styles from "./RelatedPokemonSection.module.css";
import Link from "next/link";

export const RelatedPokemonSection = async ({
  pokemonTypes,
}: {
  pokemonTypes: any[];
}) => {
  const relatedPokemon = await Promise.all(
    pokemonTypes.map(async (type: any) => {
      return await getPokemonByType(type.type.name);
    })
  );

  //merge the pokemon names that are on more than one type
  const pokemonNames = relatedPokemon
    .map((pokemon) => pokemon.pokemon)
    .flat()
    .reduce((acc: string[], curr: any) => {
      if (!acc.includes(curr.pokemon.name)) {
        acc.push(curr.pokemon.name);
      }
      return acc;
    }, [])
    .slice(0, 3);

  return (
    <section className={styles.container}>
      {pokemonNames.map(async (name) => {
        const pokemonDetail = await getPokemon(name);
        return (
          <Link key={name} href={`/detail/${pokemonDetail.name}`}>
            <article className={styles.card}>
              <Image
                key={name}
                src={pokemonDetail.sprites.front_default}
                alt={name}
                width={100}
                height={100}
              />
              <div key={name}>{name}</div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};
