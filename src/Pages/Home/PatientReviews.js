import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import PatientReview from './PatientReview';

const PatientReviews = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            img: people1,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name: "Winson Herry",
            img: people2,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name: "Winson Herry",
            img: people3,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {
                reviews.map(review => <PatientReview
                    key={review._id}
                    review={review}
                ></PatientReview>)
            }
        </div>
    );
};

export default PatientReviews;