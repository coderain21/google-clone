import Link from 'next/link';
import React from 'react'

function Avator({ url, className }) {
    return (
        <>
            <Link href='https://jcashleyportfolio.netlify.app'>
                <img
                    className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
                    loading='lazy'
                    src={url}
                    alt='avator'
                />
            </Link>
        </>

    );
}

export default Avator;