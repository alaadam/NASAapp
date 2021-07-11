import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Favourites from './Favourites'
import Search from './Search'

const Container = () => {
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/search' exact render={() => <Search />} />
            <Route path='/favourites' exact render={() => <Favourites />} />
            <Route path='/favourites/:id' exact render={({ match }) => <Favourites match={match} />} />
        </div>
    );
};

export default Container;
