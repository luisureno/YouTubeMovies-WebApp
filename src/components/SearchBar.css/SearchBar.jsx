import './SearchBar.css';

export default function SearchBar(){
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search for a movie..." />
            <button className='searchbar-btn'>Search</button>
        </form>
    )
}