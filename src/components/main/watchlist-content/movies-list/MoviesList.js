import MovieItem from "../movie-item/MovieItem";
import classes from "./MoviesList.module.css";

function MoviesList(props) {
    return ( 
        <>
            <div className={classes.rank}>
                <h1>CinemaHome Top {props.movies.length} Movies</h1>
            </div>        
            <ul className={classes.movie_items}>
                {props.movies.map((movie, index) => (
                    <li key={movie.id} className="slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                        <MovieItem 
                            id={movie.id}
                            poster={movie.poster}
                            title={movie.title}
                            releaseDate={movie.releaseDate}
                            trailerLink={movie.trailerLink}
                        />      
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MoviesList;