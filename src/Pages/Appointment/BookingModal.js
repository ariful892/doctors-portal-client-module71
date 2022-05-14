import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment }) => {

    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-accent">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;