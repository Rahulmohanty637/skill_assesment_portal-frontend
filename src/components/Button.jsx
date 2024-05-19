import React from 'react';

const Button = ({ name, onClick }) => {
    return (
        <button
            className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700'
            onClick={onClick}
        >
            {name}
        </button>
    );
};

export default Button;
