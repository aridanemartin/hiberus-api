import { Layout } from "@/app/_components/Layout/Layout";
import { ProgressBar } from "@/app/_components/ProgressBar/ProgressBar";
import { RelatedPokemonSection } from "@/app/_components/RelatedPokemonSection/RelatedPokemonSection";
import { Stat } from "@/app/_interfaces/pokemon/pokemon";
import { getPokemon } from "@/app/_lib/pokemonAPI";
import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./DetailPage.module.css";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";
import backButton from "@/app/_assets/icons/back.png";
import Link from "next/link";
import { Spinner } from "@/app/_components/Spinner/Spinner";

const DetailPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const pokemonDetail = await getPokemon(slug);

  return (
    <Layout maxWidth={1100}>
      <div className={styles.header}>
        <Link className={styles.closeButton} href="/">
          <Image src={backButton} alt="Close" width={20} height={20} />
        </Link>
      </div>
      <div className={styles.mainTitleAndImageContainer}>
        <h1 className={styles.title}>{capitalizeFirstLetter(slug)} details</h1>
        {pokemonDetail.sprites.other["official-artwork"].front_default && (
          <Image
            src={pokemonDetail.sprites.other["official-artwork"].front_default}
            alt={pokemonDetail.name}
            width={200}
            height={200}
          />
        )}
      </div>
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
      <section className={styles.relatedPokemonContainer}>
        <Suspense fallback={<Spinner />}>
          <RelatedPokemonSection pokemonTypes={pokemonDetail.types} />
        </Suspense>
      </section>
    </Layout>
  );
};

export default DetailPage;
