import React, { useState } from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [isOpen,setIsOpen]=useState()
    return (
        <header id="t">
            <nav id="Z">
                <>Vivekanand College</>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                <div className='bar'/>
                </div>
                <div>
                {isOpen && (
                    <div className="menu">
                    <Link to='/' id="R">  HomePage </Link>
                    <Link to='/aboutpage' id="R"> AboutPage </Link>
                     <Link to='/coursespage' id="R"> CoursesPage </Link>
                     <Link to='/contactpage' id="R"> ContactPage </Link>
                     <Link to='/admissionspage'> <button id="u">Apply Now!</button></Link>
                    </div>
                )}
                </div>
                <div>
                <Link to='/' id="R">  HomePage </Link>
                <Link to='/aboutpage' id="R"> AboutPage </Link>
                <Link to='/coursespage' id="R"> CoursesPage </Link>
                <Link to='/contactpage' id="R"> ContactPage </Link>
                <Link to='/admissionspage'> <button id="u">Apply Now!</button></Link>
                </div>   
            </nav>
        </header>
    );
};

export default Header;
