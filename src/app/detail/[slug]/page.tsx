import { Layout } from "@/app/_components/Layout/Layout";
import { ProgressBar } from "@/app/_components/ProgressBar/ProgressBar";
import { RelatedPokemonSection } from "@/app/_components/RelatedPokemonSection/RelatedPokemonSection";
import { Stat } from "@/app/_interfaces/pokemon/pokemon";
import { getPokemon } from "@/app/_lib/pokemonAPI";
import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./DetailPage.module.css";

const DetailPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const pokemonDetail = await getPokemon(slug);

  return (
    <Layout maxWidth={1100}>
      <h1 className={styles.title}>Detail page for {slug}</h1>
      {pokemonDetail.sprites.front_default && (
        <Image
          src={pokemonDetail.sprites.front_default}
          alt={pokemonDetail.name}
          width={200}
          height={200}
        />
      )}
      <section className={styles.statsContainer}>
        {pokemonDetail.stats.map((stat: Stat) => (
          <ProgressBar
            key={stat.stat.name}
            stat={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
      </section>

      <h2 className={styles.title}>Related Pokémon</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <RelatedPokemonSection pokemonTypes={pokemonDetail.types} />
      </Suspense>
    </Layout>
  );
};

export default DetailPage;
