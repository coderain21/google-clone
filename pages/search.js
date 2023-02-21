import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

function search() {
    return (
        <div>
            <Head>
                <title>Search Result</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* HEADER */}

            <Header />
            {/* <h1>Search Result</h1> */}

            {/* SEARCH RESULTS */}

        </div>
    )
}

export default search