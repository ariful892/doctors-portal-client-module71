import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import DentalCare from './DentalCare';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been ,the"
        },
        {
            _id: 2,
            name: "Cavity Filling",
            img: cavity,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been ,the"
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            img: whitening,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been ,the"
        }
    ]

    return (
        <div className='my-20'>
            <h4 className='uppercase text-primary font-bold text-center'>Our Services</h4>
            <p className='text-center text-3xl'>Services We Provide</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Services;