import { cleanup, render, fireEvent } from "@testing-library/react";
import { GridPage } from "./GridPage";
import * as pokemonApi from "@/app/_lib/pokemonAPI";
import { describe, test, expect, vi, afterEach } from "vitest";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";

vi.mock("../DetailsModal/DetailsModal", () => {
  return {
    default: () => <div>DetailsModalMock</div>,
  };
});

describe("GridPage", () => {
  const getPokemonSpy = vi.spyOn(pokemonApi, "getPokemon");

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  const mockData = {
    results: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    ],
  };

  test("renders the grid page with correct data", () => {
    const { getByText, getAllByRole } = render(<GridPage data={mockData} />);

    const pokemonImages = getAllByRole("img");
    const pokemonNames = mockData.results.map((pokemon) =>
      getByText(capitalizeFirstLetter(pokemon.name))
    );

    expect(pokemonNames.length).toBe(mockData.results.length);
    expect(pokemonImages.length).toBe(mockData.results.length);
  });

  test("calls getPokemon and sets selectedPokemonName on pokemon click", async () => {
    const mockPokemon = { name: "bulbasaur" };
    getPokemonSpy.mockResolvedValue(mockPokemon);

    const { getByText } = render(<GridPage data={mockData} />);

    const pokemonName = getByText(
      capitalizeFirstLetter(mockData.results[0].name)
    );
    fireEvent.click(pokemonName);

    expect(getPokemonSpy).toHaveBeenCalledWith(mockData.results[0].name);
  });

  test("renders DetailsModal when selectedPokemonName is not null", async () => {
    const { getByText, getByAltText } = render(<GridPage data={mockData} />);

    const pokemonCard = getByAltText("bulbasaur");
    fireEvent.click(pokemonCard);

    await vi.waitFor(() => {
      const detailsModal = getByText("DetailsModalMock");
      expect(detailsModal).toBeDefined();
    });
  });
});
