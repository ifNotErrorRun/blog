import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // 실제 검색 로직 구현 필요
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
