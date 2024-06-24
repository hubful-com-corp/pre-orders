import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HubFulHubPage from './pages/HubFulHubPage';
import HubFulBizHubPage from './pages/HubFulBizHubPage';
import HubFulMallPage from './pages/HubFulMallPage';
import PricingPage from './pages/PricingPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPage from './pages/AdminPage';
import ConsentBox from './components/ConsentBox';
import InvestPage from './pages/InvestPage';

const App = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/hubful-hub" component={HubFulHubPage} />
                <Route path="/hubful-bizhub" component={HubFulBizHubPage} />
                <Route path="/hubful-mall" component={HubFulMallPage} />
                <Route path="/pricing/:type" component={PricingPage} />
                <Route path="/register/:type/:plan" component={RegisterPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/consent" component={() => <ConsentBox currentDate={currentDate} />} />
                <Route path="/invest" component={InvestPage} />
            </Switch>
        </Router>
    );
};

export default App;
