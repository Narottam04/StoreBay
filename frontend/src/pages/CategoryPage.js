import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const CategoryPage = () => {
    const [toggle,setToggle] = useState(false)
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
    
    useEffect(()=> {
        dispatch(listProducts())
    },[dispatch])

    return (
        <>
            <Navbar/>
            {/* filter mobile view */}
            <div className="lg:hidden">
                <div className = "flex justify-around">
                    <h1 className = " font-semibold text-lg ">FILTERS</h1>
                    <div className={`hamburger ${toggle ?"is-active":""}`} id="hamburger-1" onClick = {()=> setToggle(!toggle)} >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                {toggle &&
                    <div className = "mx-6 my-4">
                        <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 "   id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Enginnering"  />
                                <span className="ml-2 text-gray-700">Enginnering</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "IIT-JEE"  />
                                <span className="ml-2 text-gray-700">IIT-JEE</span>
                            </label>
                            {/* <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Civil Exams"   />
                                <span className="ml-2 text-gray-700">Civil Exams</span>
                            </label> */}
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Autobiography"  />
                                <span className="ml-2 text-gray-700">Autobiography</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
            {/* filter desktop view */}
            <div className="flex justify-center lg:justify-start">
                <aside className = "hidden lg:block sticky self-start  top-4 w-1/5">
                    <div className="space-y-2 mx-12 my-6">
                        <h1 className = " font-semibold text-lg ">FILTERS</h1>
                        <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 "   id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Enginnering"  />
                                <span className="ml-2 text-gray-700">Enginnering</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "IIT-JEE"  />
                                <span className="ml-2 text-gray-700">IIT-JEE</span>
                            </label>
                            {/* <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Civil Exams"   />
                                <span className="ml-2 text-gray-700">Civil Exams</span>
                            </label> */}
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600"   id = "Autobiography"  />
                                <span className="ml-2 text-gray-700">Autobiography</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {loading ?
                    <Loader/> :
                    error ? <p>{error}</p> :  
                    <div className="bg-white">
                    <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map(product => {
                            return(
                                <Product product={product} key={product._id}/>
                            )
                        })}
                        </div>
                    </div>
                    </div>
                } 
            </div> 
            <Footer/>   
        </>
    )
}

export default CategoryPage
