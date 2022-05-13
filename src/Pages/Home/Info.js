import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    const bgPrimary = 'bg-gradient-to-r from-secondary to-primary';
    const bgAccent = 'bg-accent';

    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
            <InfoCard cardTitle="Opening Hours" img={clock} bgClass={bgPrimary}></InfoCard>
            <InfoCard cardTitle="Our Locations" img={marker} bgClass={bgAccent}></InfoCard>
            <InfoCard cardTitle="Contact Us" img={phone} bgClass={bgPrimary}></InfoCard>
        </section>
    );
};

export default Info;