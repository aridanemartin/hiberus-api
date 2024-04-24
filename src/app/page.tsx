import { getPokemonList } from "./_lib/pokemonAPI";
import { GridPage } from "./_components/GridPage/GridPage";
import { Layout } from "./_components/Layout/Layout";
import { SearchBar } from "./_components/SearchBar/SearchBar";
import "./globals.css";
import { Pokemon } from "./_interfaces/pokemon/pokemon";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const pokemonList = await getPokemonList();

  const search = searchParams?.search || "";

  const filteredPokemonList = pokemonList.results.filter((pokemon: Pokemon) =>
    pokemon.name.includes(search)
  );

  const filteredPokemon = {
    count: filteredPokemonList.length,
    results: filteredPokemonList,
  };

  return (
    <main>
      <Layout maxWidth={750}>
        <SearchBar />
        <GridPage data={filteredPokemon} />
      </Layout>
    </main>
  );
}
