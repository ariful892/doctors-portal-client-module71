import React from 'react';
import banner from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bannerBg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${bannerBg}) ` }} className="hero min-h-screen bg-img">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Banner;