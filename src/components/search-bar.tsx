"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar(
    {defaultValue, onChange, onSubmit, ...props} : 
    {defaultValue?: string, onChange: (value: string) => void, onSubmit: (value: string) => void}
) {
    const [search, setSearch] = useState(defaultValue || ""	);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onChange(e.target.value);
    };

    const handleSearchSubmit = () => {
        onSubmit(search);
    }

    return (
        <div className="flex items-center" {...props}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <FaSearch />
                </div>
                <input 
                    value={search}
                    onChange={handleSearchChange}
                    type="text" id="simple-search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-gray-900 focus:border-primary focus:ring-primary" placeholder="Search article name..." required 
                />
            </div>
            <button 
                onClick={handleSearchSubmit}
                type="submit" className="ms-2 rounded-lg border border-primary bg-primary p-2.5 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Search
            </button>
        </div>

    )
}

export default SearchBar;