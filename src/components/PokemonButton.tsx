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
    <div className="mx-auto">
      <button
        onClick={handleClick}
        className="flex justify-center items-center bg-white border-6 border-white rounded-md  hover:border-blue-200 min-w-48"
      >
        <img
          src={pokemon.sprite}
          className="w-full h-full object-contain crisp-image"
        />
      </button>
    </div>
  );
};

export default PokemonButton;
