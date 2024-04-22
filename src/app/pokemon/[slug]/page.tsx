import { RelatedPokemonSlider } from "@/app/_components/RelatedPokemonSlider/RelatedPokemonSlider";
import { getPokemon } from "@/app/_lib/pokemonAPI";

export default async function PokemonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const pokemon = await getPokemon(slug);

  const pokemonTypes = pokemon.types.map((type) => type.type.name);

  console.log();

  return (
    <>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}

      <RelatedPokemonSlider pokemonTypes={pokemonTypes} />
    </>
  );
}