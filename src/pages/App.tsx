import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
