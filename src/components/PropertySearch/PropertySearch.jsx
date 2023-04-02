import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Pagination from './Results/Pagination/Pagination';
import Results from './Results/Results';
import queryString from "query-string"

const PropertySearch = () => {
    const [properties, setProperties] = useState([])
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 3
    const router = useRouter()
    const search = async () => {
        const { page } = queryString.parse(window.location.search)
        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1")
            })
        })
        const data = await response.json()
        setProperties(data.properties)
        setTotalResults(data.total)
    };
    const handlePageClick = async (pageNumber) => {
        await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
            shallow: true
        });
        search()
    }
    useEffect(() => {
        search()
    }, [])
    return (
        <div>
            <Results properties={properties} />
            <Pagination onPageClick={handlePageClick} totalPage={Math.ceil(totalResults / pageSize)} />
        </div>
    )
}

export default PropertySearch
