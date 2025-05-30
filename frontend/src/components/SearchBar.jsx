import React, { useState } from 'react';

const SearchBar = ({ onSearchChange }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearchChange(value); // Notify parent component of the search query
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by title or author..."
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
