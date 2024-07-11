import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
   
    const mockResults = [
      'Result 1',
      'Result 2',
      'Result 3'
    ].filter(result => result.toLowerCase().includes(searchQuery.toLowerCase()));
    setResults(mockResults);
  };

  return (
    <div className="app-container">
      <h1>Search Application</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;