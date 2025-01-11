import { Helmet } from "react-helmet";
import Home from "../components/main/homepage-content/Home";

function HomePage() {
    return ( 
        <>
            <Helmet>
                <title>Home</title>  
                <meta name="description" content="Slideshow of some interesting movies." /> 
            </Helmet>

            <Home />
        </>        
    );
}

export default HomePage;