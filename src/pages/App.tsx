import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./HomePage";
import CreatePage from "./CreatePage";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/create" component={CreatePage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
