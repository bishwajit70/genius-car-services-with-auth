import React from 'react';
import './Experts.css'
import expert1 from '../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Gamarol Smith', img: expert1 },
    { id: 2, name: 'Kalimond Stewert', img: expert2 },
    { id: 3, name: 'Stephen Arin Halder', img: expert3 },
    { id: 4, name: 'Amit Biswas', img: expert4 },
    { id: 5, name: 'Daniel Kalua', img: expert5 },
    { id: 6, name: 'Robin Bormon', img: expert6 }
]

const Experts = () => {
    return (
        <div className='container text-center mb-5'>
            <h1 className='mb-5'>Our Experts</h1>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;