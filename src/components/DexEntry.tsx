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
    <div className="pixel-font w-full md:w-[500px] h-auto bg-dexTop border-3 border-black rounded-2xl">
      <div className="flex justify-between px-[10px] py-2 border-b-5">
        <img
          className="w-50 ml-1 mt-2 border-5 border-white rounded-md bg-white transform scale-x-[-1] crisp-image"
          src={pokemon.sprite}
          alt={pokemon.name}
        />
        <div className="pixel-font-bold flex flex-col text-2xl/[2] ml-4 pr-[40px] pt-2.5">
          <p>{pokemon.name}</p>
          <p>{pokemon.species}</p>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </div>
      </div>
      <p className="text-[1.5rem] px-[10px] py-[20px] bg-dexBottom rounded-b-2xl border-dashed border-t-5">
        {pokemon.dexEntry}
      </p>
    </div>
  );
};

export default DexEntry;
