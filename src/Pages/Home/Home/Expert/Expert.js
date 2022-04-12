import React from 'react';
import { Link } from 'react-router-dom';


const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        // <div classNameName='card col-sm-12 col-md-4' style={{ width: "18rem" }}>
        //     <img src={img} className="card-img-top" alt="..." />
        //     <div classNameName="card-body">
        //         <h5 classNameName="card-title">{name}</h5>
        //         <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" classNameName="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div >


        <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="card">
                <img  src={img} className="card-img-top w-100" alt="expert" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a as={Link} href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;