import { getPokemonList } from "./_lib/pokemonAPI";
import { GridPage } from "./_components/GridPage/GridPage";
import { Layout } from "./_components/Layout/Layout";
import { SearchBar } from "./_components/SearchBar/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const pokemonList = await getPokemonList();

  const search = searchParams?.search || [];

  const filteredPokemonList = pokemonList.results.filter((pokemon) =>
    pokemon.name.includes(search)
  );

  const filteredPokemon = {
    count: filteredPokemonList.length,
    results: filteredPokemonList,
  };

  console.log("===search==>", pokemonList);
  console.log("===search==>", filteredPokemon);

  return (
    <main>
      <SearchBar />
      <Layout maxWidth={750}>
        <GridPage data={filteredPokemon} />
      </Layout>
    </main>
  );
}
