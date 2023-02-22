import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
// import { search } from '../pages/index'
import Avator from './Avator';
import HeaderOptions from './HeaderOptions';
import Link from 'next/link';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className='sticky top-0 bg-white'>
            <div
                className='flex w-full p-6 items-center'
            >
                <Image src='https://cdn.freebiesupply.com/logos/large/2x/google-1-1-logo-png-transparent.png'
                    height={40}
                    width={140}
                    className='cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                    <input className='flex-grow w-4 focus:outline-none text-center' ref={searchInputRef} type='text' placeholder='Search' />

                    <XIcon
                        onClick={() => (searchInputRef.current.value = "")}
                        className='h-5 w-5 text-gray-400 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
                    />
                    <MicrophoneIcon className='h-6 mr-3 small:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 small:inline-flex' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button onClick={search} hidden type='submit'>Search</button>
                </form>
                {/* <Link href='https://jcashleyportfolio.netlify.app'> */}
                <Avator url='https://avatars.githubusercontent.com/u/113396637?v=4' className='ml-auto' />
                {/* </Link> */}
            </div>

            {/* header option */}

            <HeaderOptions />
        </header>
    )
}

export default Header