import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p className='uppercase text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        class="btn btn-secondary text-white font-bold"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;