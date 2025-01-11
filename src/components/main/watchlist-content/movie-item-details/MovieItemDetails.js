import { useState } from "react";
import CommentForm from "../../../UIElements/comment-form/CommentForm";
import classes from "./MovieItemDetails.module.css";
import { Link } from "react-router-dom";

function MovieItemDetails(props) {
    const [movieData, setMovieData] = useState(props.movie);

    function handlerAddComment(newComment) {
        setMovieData((prevData) => ({
            ...prevData,
            comments: [...prevData.comments, newComment],
        }));    
    }

    return ( 
        <section className="content">
            <div className={classes.section}>
                <div className={classes.section_img}>
                    <img src={movieData.poster} alt={movieData.title} />
                </div>
                <div className={classes.details}>
                    <h2>{movieData.title}</h2>
                    <h3>{movieData.releaseDate}</h3>
                    <p>{movieData.description}</p>
                    <div className={classes.btn_trailer}>
                      <Link to={`/trailer/${movieData.trailerLink.substring(movieData.trailerLink.length - 11)}`}>Watch Trailer</Link>
                    </div> 
                </div>
            </div>
            <CommentForm onAddComment={handlerAddComment}/>
            <div className={classes.comments_section}>
                <h3 className={classes.comments_title}>Comments ({movieData.comments.length})</h3>
                {movieData.comments.length > 0 ? 
                    (<ul>
                        {movieData.comments.map((comment, index) => (
                            <li key={index}><p>{comment}</p></li>
                        ))}
                    </ul>) : 
                    (<p className={classes.comments_no_c}>No comments yet. Be the first to leave a comment.</p>)
                }
            </div>
        </section>
    );
}

export default MovieItemDetails;