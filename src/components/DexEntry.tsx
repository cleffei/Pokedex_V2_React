import React from 'react';

interface Pokemon {
  id: number;
  sprite: string;
  name: string;
  species: string;
  height: string;
  weight: string;
  dexEntry: string;
}

interface DexEntryProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const DexEntry: React.FC<DexEntryProps> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <p>{pokemon.species}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
      <p>{pokemon.dexEntry}</p>
    </div>
  );
};

export default DexEntry;
