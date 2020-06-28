import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
            <h3 className="welcome"><span>IT Desk</span></h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="signup">Signup</Link></li>
            </ul>   
            </div>
        </nav>
    )
}

export default Header;
