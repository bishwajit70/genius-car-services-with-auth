import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Detail page: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary my-5'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;