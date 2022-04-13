import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, description, price, img } = service

    const navigate = useNavigate()

    const handleNavigateDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleNavigateDetail(id)} className='btn btn-primary'>Book: {name} </button>
        </div>
    );
};

export default Service;