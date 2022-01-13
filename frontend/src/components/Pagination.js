import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Pagination = ({pages,page}) => {
    const [changePage,setChangePage] = useState(page)
    const navigate = useNavigate()
    const HandlePaginationNext = () => {
        if(pages > 1 && page< pages){
            setChangePage(prevState => prevState +1)
            navigate(`/category/page/${changePage}`)
        }
    }

    const HandlePaginationPrev = () => {
        if(pages > 1 && page > 1 ){
            setChangePage(prevState => prevState - 1)
            navigate(`/category/page/${changePage}`)
        }
    }
    return pages > 1 && (
        <div className='mt-16 flex justify-center items-center'>
            {/* <!-- Previous Button --> */}
            <button disabled={page === 1}  onClick={()=> HandlePaginationPrev()} className={` inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-white bg-indigo-700 rounded-lg border border-indigo-300 hover:bg-indigo-900 hover:text-white hover:cursor-pointer `}>
                <ArrowNarrowLeftIcon className='text-white w-6 h-4 ml-2'/>
                 Previous
            </button>
            <button disabled={page === pages} onClick={()=> HandlePaginationNext()}  className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-indigo-700 rounded-lg border border-indigo-300 hover:bg-indigo-900 hover:text-white hover:cursor-pointer `}>
                Next
                <ArrowNarrowRightIcon className='text-white w-6 h-4 ml-2'/>
            </button>
        </div>
    )
}

export default Pagination
