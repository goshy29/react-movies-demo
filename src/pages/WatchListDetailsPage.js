import { useParams } from "react-router-dom";
import { MOVIES } from "../data/movies";
import { Helmet } from "react-helmet";
import MovieItemDetails from "../components/main/watchlist-content/movie-item-details/MovieItemDetails";

function WatchListDetailsPage() {
    const { movieId } = useParams();

    const loadedMovie = MOVIES.find(movie => movie.id === movieId);

    return ( 
        <>
            {loadedMovie && (
                <Helmet>
                    <title>{loadedMovie.title}</title>
                    <meta name="description" content={loadedMovie.title} />
                </Helmet>
            )}

            {!loadedMovie ? 
                (<h2 className="content">Error: Movie not found</h2>) : 
                (<MovieItemDetails movie={loadedMovie}/>)
            }
        </>
    );
}

export default WatchListDetailsPage;