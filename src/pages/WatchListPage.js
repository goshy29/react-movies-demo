import { Helmet } from "react-helmet";
import WatchList from "../components/main/watchlist-content/WatchList";
import {MOVIES} from "../data/movies";

function WatchListPage() {
    return ( 
        <>
            <Helmet>
                <title>Watch List</title>  
                <meta name="description" content="List of movies with their details." /> 
            </Helmet>

            <WatchList movies={MOVIES} />
        </>
    );
}

export default WatchListPage;