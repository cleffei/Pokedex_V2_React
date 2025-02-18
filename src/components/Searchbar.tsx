import React from 'react';

interface SearchbarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  return (
    <input
      className="bg-red-300"
      type="text"
      placeholder="Search Pokémon"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbar;
