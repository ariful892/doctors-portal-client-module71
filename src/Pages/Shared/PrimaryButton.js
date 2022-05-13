import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary uppercase text-white text-base font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;