import React from 'react';

function Navigation() {
    return (
        <nav>
            <a href="/create">CREATE LOBBY</a>
            <a href="/browse">BROWSE</a>
            <a href="/leaderboards">LEADERBOARDS</a>
            <a id="login" href="/login">LOG IN</a>
            <a id="logout" href="/logout">LOG OUT</a>
        </nav>
    );
}

export default Navigation;
