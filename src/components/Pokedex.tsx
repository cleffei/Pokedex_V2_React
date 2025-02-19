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
      <div className="flex space-x-5">
        <h1>Pokémon Red/Blue Pokédex</h1>
        <Searchbar setSearch={setSearch} />
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-5 my-10">
        {filteredResults.map((pokemon) => (
          <>
            <PokemonButton
              key={pokemon.id + 151}
              pokemon={pokemon}
              handleClick={() => setSelectedPokemon(pokemon)}
            />
          </>
        ))}
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
    </>
  );
};

export default Pokedex;
