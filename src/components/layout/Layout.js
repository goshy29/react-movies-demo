import MainNavigation from "../navigation/main-navigation/MainNavigation";

function Layout(props) {
    return ( 
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;