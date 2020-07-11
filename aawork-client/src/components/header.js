import React, {useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import axios from 'axios';

const Header = () => {
    const [ logout, setLogout] = useState(false)
    const auth = useContext(authContext);


        const handleLogout = async (e) => {
            e.preventDefault()
            const res = await axios.post('/api/logout')
            console.log(res.data)
            auth.setUnauthStatus();
            setLogout(true)
        }
    
    if (logout) {
        return <Redirect to="/" />
    }
    
    return (
        <nav className="navbar">
            <div className="container nav-container">
            <h3 className="welcome"><span>IT Desk</span></h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
            </ul>   
            </div>
        </nav>
    )
}

export default Header;
