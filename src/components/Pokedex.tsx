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
      <div className="flex flex-wrap">
        {filteredResults.map((pokemon) => (
          <PokemonButton key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
