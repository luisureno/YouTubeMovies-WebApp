import './SearchBar.css';
import React from 'react';
import { useState } from 'react';
import {movieData} from '../../movieData';
import Main from '../Main/Main';

export default function SearchBar(){
    // this state holds the current value of the search input, and 
    // is updated whenever the user types in the search bar
    const [searchTerm, setSearchTerm] = useState('');
    // this state holds the filtered movies that match the search term
    // and is calculated directly from the movieData
    const [filteredMovies, setFilteredMovies] = useState([]);

    const handSeachChange = (e) => {
        //this grabs the current text in the search bar
        const value = e.target.value;
        //this will update the search term state with the current value
        //inside the input field
        setSearchTerm(value);

    };



    return (
        <form className="search-bar">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            />
            <button className='searchbar-btn'>Search</button>
        </form>
    )
}