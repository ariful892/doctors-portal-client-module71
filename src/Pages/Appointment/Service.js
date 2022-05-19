import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {

    const { _id, name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p className='uppercase text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        className="btn btn-secondary btn-sm text-white font-bold bg-gradient-to-r from-secondary to-primary"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}

                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;