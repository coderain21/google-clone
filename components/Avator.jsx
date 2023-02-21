import React from 'react'

function Avator({ url }) {
    return (
        <img
            className='h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
            loading='lazy'
            src={url}
            alt='avator'
        />

    );
}

export default Avator;