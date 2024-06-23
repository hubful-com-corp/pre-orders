import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PricingPage = () => {
    const { type } = useParams();

    return (
        <div className="pricing-page">
            <h1>Pricing for {type === 'hub' ? 'HubFul Hub' : 'HubFul BizHub'}</h1>
            {/* Display pricing plans based on the type */}
            <Link to={`/register/${type}/plan1`}>Plan 1</Link>
            <Link to={`/register/${type}/plan2`}>Plan 2</Link>
            <Link to={`/register/${type}/plan3`}>Plan 3</Link>
        </div>
    );
};

export default PricingPage;
