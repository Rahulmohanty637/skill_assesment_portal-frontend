import React from 'react';

const InputBox = ({ label, placeholder, onChange }) => {
    return (
        <div className='my-2 w-full'>
            <label className='block font-bold text-left mb-1'>{label}</label>
            <input
                type='text'
                placeholder={placeholder}
                onChange={onChange}
                className='border rounded w-full py-2 px-3'
            />
        </div>
    );
};

export default InputBox;
