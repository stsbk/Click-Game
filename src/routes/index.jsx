import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage';

export const Router = () => {
    return (
        <React.Fragment>
            <main className="content">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                    </Switch>
                </div>
            </main>
        </React.Fragment>
    )
};
