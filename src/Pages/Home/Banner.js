import React from 'react';
import banner from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bannerBg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${bannerBg}) ` }} class="hero min-h-screen bg-img">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Banner;