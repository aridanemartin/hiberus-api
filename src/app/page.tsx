import Image from "next/image";
import styles from "../app/page.module.css";
import { useState } from "react";
import Link from "next/link";
import { getPokemonList } from "./_lib/pokemonAPI";
import { GridPage } from "./_components/GridPage/GridPage";

const INITIAL_OFFSET = 10;

export default async function Home() {
  const data = await getPokemonList();

  return (
    <main className={styles.main}>
      <GridPage data={data} />
    </main>
  );
}
