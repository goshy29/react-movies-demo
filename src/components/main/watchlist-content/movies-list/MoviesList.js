import MovieItem from "../movie-item/MovieItem";
import classes from "./MoviesList.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInLeft } from "../../../utils/motion";


function MoviesList(props) {
    const {ref, inView} = useInView({triggerOnce: true});

    return ( 
        <>
            <div className={classes.rank}>
                <h1>CinemaHome Top {props.movies.length} Movies</h1>
            </div>        
            <ul ref={ref} className={classes.movie_items}>
                {props.movies.map((movie, index) => (
                    <motion.li key={movie.id} variants={slideInLeft(index * 0.1)} initial="hidden" animate={inView ? "show" : "hidden"}>
                        <MovieItem 
                            id={movie.id}
                            poster={movie.poster}
                            title={movie.title}
                            releaseDate={movie.releaseDate}
                            trailerLink={movie.trailerLink}
                        />      
                    </motion.li>
                ))}
            </ul>
        </>
    );
}

export default MoviesList;