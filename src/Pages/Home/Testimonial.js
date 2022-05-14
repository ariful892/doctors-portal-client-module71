import React from 'react';
import quote from '../../assets/icons/quote.svg';
import PatientReviews from './PatientReviews';

const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div >
                    <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <PatientReviews></PatientReviews>
        </section>
    );
};

export default Testimonial;