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

interface ButtonProps {
  pokemon: Pokemon;
  handleClick: () => void;
}

const PokemonButton: React.FC<ButtonProps> = ({ pokemon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-white border-4 border-white rounded-md hover:border-blue-200 w-full aspect-square flex justify-center items-center"
    >
      <img
        src={pokemon.sprite}
        className="w-4/5 h-4/5 object-contain crisp-image"
        alt={pokemon.name}
      />
    </button>
  );
};

export default PokemonButton;
