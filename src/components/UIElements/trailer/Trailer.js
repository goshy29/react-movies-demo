import { useParams } from 'react-router-dom';
import classes from './Trailer.module.css';
import ReactPlayer from 'react-player';

function Trailer() {
    let params = useParams();
    let key = params.trailerId;

    return ( 
        <div className={classes.react_player}>
            {(key != null) && <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%' height='100%'/>}
        </div>   
    );
}

export default Trailer;