import React from 'react';

interface SearchbarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  return (
    <input
      className="bg-[#faebd7] text-black p-2 mt-2 rounded-lg focus:outline-1 focus:outline-[#a5d684]"
      type="text"
      placeholder="SEARCH POKÉMON..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbar;
