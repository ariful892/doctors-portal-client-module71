import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="text-center mt-32">
            <div className='py-12'>
                <h4 className='text-xl text-primary font-bold '>Contact Us</h4>
                <p className='text-white text-3xl'>Stay connected with us</p>
                <form className='my-5'>
                    <input type="email" name='email' className="form-input w-52 lg:w-5/12 px-2 py-2 my-2 rounded-md " placeholder='Email Address' />
                    <br />
                    <input type="text" name='subject' className="form-input w-52 lg:w-5/12 px-2 py-2 my-3 rounded-md " placeholder='Subject' />
                    <br />
                    <textarea name="message" id="" className='w-52 lg:w-5/12 pb-12 my-2 rounded-md' placeholder='Your message'></textarea>
                    <br />
                    <input className='bg-primary text-white font-bold px-5 py-2 mt-5 rounded-md' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;