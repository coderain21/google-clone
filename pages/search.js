import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from './keys';
import response from '@/response';
import { useRouter } from 'next/router';
import SearchResults from '@/components/SearchResults';

export function Search({ results }) {
    const router = useRouter();

    console.log('there should be my goddamn resultss!!!!!!===============>>>>>>>', results);


    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* HEADER */}

            <Header />

            {/* SEARCH RESULTS */}

            <SearchResults results={results} />



        </div>
    )
}


export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.startIndex || '0';

    const data = useDummyData ? response : await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        // `https://googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then((res) => res.json());

    // after the server hasd render send the results to the client
    return {
        props: {
            results: data
        }
    }
}