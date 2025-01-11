import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import MobileNavWrap from "../../UIElements/MobileNavWrap";
import MobileNavigation from "../mobile-navigation/MobileNavigation";
import NavLinks from "../NavLinks";


function MainNavigation() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handlerOpenMobileNav() {
        setIsMobileNavOpen(true);
    }

    function handlerCloseMobileNav() {
        setIsMobileNavOpen(false);
    }

    return ( 
        <>
            {isMobileNavOpen && (<MobileNavWrap onClick={handlerCloseMobileNav}/>)}
            {isMobileNavOpen && 
                (<MobileNavigation onClose={handlerCloseMobileNav}>
                    <nav className={classes.mobile_navbar}>
                        <ul className={classes.mobile_navbar_list}>
                            <NavLinks onClick={handlerCloseMobileNav} />
                        </ul>    
                    </nav>        
                </MobileNavigation>)
            }

            <header className={classes.main_header}>
                <div className={classes.navigation}>
                    <nav className={classes.navbar}>
                        <button className={classes.mobileNav_btn_menu} onClick={handlerOpenMobileNav}>
                            <span />
                            <span />
                            <span />
                        </button>

                        <div className={classes.navbar_logo}>
                            <Link to="/" className={classes.navbar_logo_link}><span>Cinema</span>Home</Link>
                        </div>
                        <ul className={classes.navbar_list}>
                            <NavLinks/>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default MainNavigation;