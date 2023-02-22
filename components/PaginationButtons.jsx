import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link'
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;
    return (
        <div className='flex justify-between max-w-lg text-blue-700 mb-10'>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex flex-col flex-grow items-center cursor-pointer hover:underline'>
                        <ChevronDoubleLeftIcon className="h-5 w-5" />
                        <span className="ml-2">Previous</span>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex flex-col flex-grow items-center cursor-pointer hover:underline'>
                    <ChevronDoubleRightIcon className="h-5 w-5" />
                    <span className="ml-2">Next</span>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons