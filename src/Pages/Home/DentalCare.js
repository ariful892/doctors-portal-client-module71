import React from 'react';
import treatment from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-24 mt-20">
            <figure>
                <img className='w-48 rounded-md' src={treatment} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p >Click the button to listen on Spotiwhy app.<button className="btn btn-primary text-white w-32 mt-5 block">GET STARTED</button></p>

            </div>
        </div>
    );
};

export default DentalCare;