import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center mt-48'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-5 sm:pl-5'>
                <h4 className='font-bold text-primary'>Appointment</h4>
                <p className='text-3xl mb-2 text-white'>Make an appointment Today</p>
                <p className='text-white mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;