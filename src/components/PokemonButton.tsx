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
}

const PokemonButton: React.FC<ButtonProps> = ({ pokemon }) => {
  const handleClick = () => {
    console.log(`${pokemon.name}`, pokemon);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={pokemon.sprite} />
      </button>
    </div>
  );
};

export default PokemonButton;
