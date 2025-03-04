import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import DexEntry from './DexEntry';
import PokemonButton from './PokemonButton';
import pokemonData from '../assets/pokemon.json';

interface Pokemon {
  id: number;
  sprite: string;
  name: string;
  species: string;
  height: string;
  weight: string;
  dexEntry: string;
}

const pokemonDataType: Pokemon[] = pokemonData;

const Pokedex: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const searchResults = pokemonDataType.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResults(searchResults);
  }, [search]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-wrap justify-center md:justify-between mx-15 pixel-font text-white">
          <h1 className="pixel-font-bold p-2 text-3xl">
            POKÉMON RED/BLUE POKÉDEX
          </h1>
          <Searchbar setSearch={setSearch} />
        </div>

        <div className="flex-grow">
          <div className="mx-2 md:max-w-[80%] md:mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-7 my-4">
            {filteredResults.map((pokemon) => (
              <PokemonButton
                key={pokemon.id + 151}
                pokemon={pokemon}
                handleClick={() => setSelectedPokemon(pokemon)}
              />
            ))}
          </div>
        </div>

        {/* When the selectedPokemon state variable is populated, the screen dims using inset-0 with a modal of the DexEntry placed on top of it at the centre of the screen.
      Clicking this dimmed area will update the selected Pokémon, making it null. Since it is now null, this modal will no longer be rendered as selectedPokemon is no longer true.
      stopPropagation used to prevent clicks from within the modal closing itself.*/}
        {selectedPokemon && (
          <div
            className="fixed inset-0 bg-black/15 flex justify-center items-center"
            onClick={() => setSelectedPokemon(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <DexEntry
                pokemon={selectedPokemon}
                onClick={() => setSelectedPokemon(null)}
              />
            </div>
          </div>
        )}
        <footer className="pixel-font">
          <div className="mt-10 bg-dexTop border-t-5 border-blue-100 text-center text-white">
            <h1 className="p-4 text-4xl pixel-font-bold">POKÉDEX</h1>
            <p>Adam Herdman - 2025</p>
            <p>Pixel Code font via: https://qwerasd205.github.io/PixelCode/</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pokedex;
