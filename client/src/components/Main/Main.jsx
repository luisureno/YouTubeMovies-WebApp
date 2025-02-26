import './Main.css'

export default function Main(props){

    return (
        <main className='genre-layout'>
            <div className='genre-cover'>
                <h1>{props.entry.genre}</h1>
            </div>
            <div className="movie-list">
                {props.entry.movies.map((movie) => (
                    <div className='movie-items'>
                        <a href={movie.movieLink} target='_blank'>
                            <img 
                            className='movie-cover' 
                            src={movie.img.src} 
                            alt={movie.img.alt} />
                        </a>
                        <div className='movie-items-bottom'>
                            <h2>{movie.title}</h2>
                            <div className='movie-details'>
                                <h3>{movie.genre} • {movie.year}</h3>
                                <h3>{movie.rated}</h3>
                            </div>
                        </div>
                    </div>

                ))}
                
            </div>
        </main>
        
    );
}