import { useEffect, useState } from "react";
import classes from './Slideshow.module.css';
import { MOVIES } from "../../../data/movies";

function Slideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < MOVIES.length - 1 ? prevIndex + 1 : 0
          );
        }, 4000);
    
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return ( 
        <div className={classes.slideshow}>
            {MOVIES.map((movie, index) => (
                <div key={index} className={`${classes.slide} ${index === currentImageIndex ? classes.active : ""}`}>
                    <img src={movie.backdrop} alt={movie.title} />
                    <div className={classes.overlay}>
                        <img src={movie.poster} alt={`${movie.title} Poster`} className={classes.poster} />
                        <h2>{movie.title}</h2>
                    </div>
                </div>
            ))}
        </div>        
    );
}

export default Slideshow;