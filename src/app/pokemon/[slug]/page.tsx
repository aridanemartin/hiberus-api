import { RelatedPokemonSection } from "@/app/_components/RelatedPokemonSection/RelatedPokemonSection";
import { PokemonType } from "@/app/_interfaces/pokemon/pokemon";
import { getPokemon } from "@/app/_lib/pokemonAPI";

export default async function PokemonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const pokemon = await getPokemon(slug);
  const pokemonTypes: PokemonType[] = pokemon.types.map(
    (type: { type: { name: string } }) => type.type.name
  );

  return (
    <>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}

      <RelatedPokemonSection pokemonTypes={pokemonTypes} />
    </>
  );
}
