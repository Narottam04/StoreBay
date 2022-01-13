import { HeartIcon, SearchIcon } from '@heroicons/react/outline'
import React, { useCallback, useEffect, useState } from 'react'
import { debounce } from "lodash"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = () => {
    const [search,setSearch] = useState('')
    const [searchData,setSearchData] = useState()

    useEffect(() => {
        debouncedSearchAutocomplete(search)    
    },[search])

    const debouncedSearchAutocomplete = useCallback(
        debounce(async(search) => {
            // console.log(`Searching result after 500 ${search}`)
            const {data} = await  axios.get(`/api/search?query=${search !== '' ? search: undefined}`)
            setSearchData(data)
            console.log(data)
        }, 500),
        []
    )
    
    return (
        <div>
           <div className='hidden  bg-white lg:flex items-center  left-1/2  '>
                <div className='  flex items-center w-full lg:w-[40vw]   px-4 rounded-xl bg-gray-200 text-gray-800 py-2 '>
                    <input  type="text" className="peer bg-gray-200 text-gray-800 pl-4 focus:outline-none flex-grow" placeholder='Search products' value={search} onChange={(e)=> setSearch(e.target.value)}/>
                    <SearchIcon className="text-[#B1B3B5] w-8"  />
                    <div className='z-50 absolute  top-[6.2rem]  w-[38vw] h-[50vh] bg-gray-100 hidden peer-focus:block'>
                        <p className='font-semibold mb-3'>Searching for {search}...</p>
                        <ul className='w-full'>
                            {
                                searchData &&
                                searchData.map(product => (
                                    <li key={product._id}>
                                        <Link to={`/product/${product._id}`} className=''>
                                            <p className='border border-y-2 border-x-0 border-black  bg-white py-2 px-6'>{product.name}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
              
        </div>
    )
}

export default Search
