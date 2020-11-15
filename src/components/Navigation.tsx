import React from 'react';
import {Link} from "react-router-dom";

function Navigation() : JSX.Element{
    return (
        <nav>
            <Link to="/create">CREATE LOBBY</Link>
            <Link to="/browse">BROWSE</Link>
            <Link to="/leaderboards">LEADERBOARDS</Link>
            <Link to="/login">LOG IN</Link>
            <Link to="/logout">LOG OUT</Link>
        </nav>
    );
}

export default Navigation;
