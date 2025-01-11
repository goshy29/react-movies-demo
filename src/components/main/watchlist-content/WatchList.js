import MoviesList from "./movies-list/MoviesList";

function WatchList(props) {
    return (             
        <section>
            <div className="content">
                {props.movies.length > 0 ?
                    (<MoviesList movies={props.movies}/>) :
                    (<h1>No Movies Available.</h1>)
                }
            </div>
        </section>      
    );
}

export default WatchList;