import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/pricing/:type" component={PricingPage} />
                <Route path="/register/:type/:plan" component={RegisterPage} />
                <Route path="/checkout" component={CheckoutPage} />
            </Switch>
        </Router>
    );
};

export default App;
