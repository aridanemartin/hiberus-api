import { getPokemonList } from "./_lib/pokemonAPI";
import { GridPage } from "./_components/GridPage/GridPage";

export default async function Home() {
  const data = await getPokemonList();

  return (
    <main>
      <GridPage data={data} />
    </main>
  );
}
