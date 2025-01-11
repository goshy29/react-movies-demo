import { Link } from "react-router-dom";
import classes from "./MovieItem.module.css";

function MovieItem(props) {
    return ( 
        <div className={classes.section}>
            <div className={classes.section_img}>
                <img src={props.poster} alt={props.title} />
            </div>
            <div className={classes.section_about}>
                <h2>{props.title}</h2>   
                <p>{props.releaseDate}</p>
                <div className={classes.btn_show_detail}>
                    <Link to={`/watch-list/${props.id}`}>View More</Link>
                </div> 
            </div>    
        </div>
    );
}

export default MovieItem;