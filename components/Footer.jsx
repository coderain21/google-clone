import React from 'react'
import { Link } from 'next/link'

function Footer() {

    return (
        <footer className='grid w-full justify-center'>
            <div className='px-8 py-3'>
                {/* <p>This is a completely unique site</p> */}
                <p>This clone site was developed by
                    <a className='pl-1 text-blue-800' href='https://www.linkedin.com/in/jeremy-ashley-webdev/'>
                        Jeremy Ashley </a>

                </p>
            </div>

        </footer>
    )
}

export default Footer