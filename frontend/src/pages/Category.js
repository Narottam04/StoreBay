import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { getCategoryProduct, listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'


const categories = [
    "Laptop",
    "Mobile",
    "Headphone",
    "Keyboard",
    "Mouse",
    "Camera",
    "Playstation",
  ];

const brand = [
    "Apple",
    "Logitech",
    "Canon",
    "Amazon",
  ];

const Category = () => {
    const [toggle,setToggle] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [category, setCategory] = useState("");

    const [ratings, setRatings] = useState(0);

    const {keyword} = useParams()

    const dispatch = useDispatch()
    const categoryProductList = useSelector(state => state.categoryProductList)
    const {loading, error, products,productsCount,resultPerPage,filteredProductsCount} = categoryProductList

    console.log(products)

    useEffect(()=> {
        dispatch(getCategoryProduct(keyword, currentPage, price, category, ratings))
    },[dispatch, keyword, currentPage, price, category, ratings])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setPrice([Number(minPrice),Number(maxPrice)])
    //     console.log(price)
    // }

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
                        <h2 className = " font-semibold text-lg text-gray-500">Brands</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"   className=" h-5 w-5 text-gray-600 "   id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
            {/* filter desktop view */}
            <div className="flex justify-center lg:justify-start">
                <aside className = "hidden lg:block border-x-4 sticky self-start  top-4 w-1/5">
                    <form >
                        {/* <div className="space-y-2 mx-12 my-6">
                            <h1 className = " font-semibold text-lg ">FILTERS</h1>
                            <h2 className = " font-semibold text-lg text-gray-500">Brands</h2>
                                {loading ?
                                    <p>Loading brands...</p> :
                                    error ? <p>{error}</p> :  
                                    <div className="flex flex-col">
                                        {brand.map(item => (
                                            <label className="cursor-pointer inline-flex items-center mt-3">
                                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 " name='category' value={item}  id = {item} />
                                            <span className="ml-2 text-gray-700">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                } 
                        </div> */}
                        <div className="space-y-2 mx-12 my-6">
                            <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                            <div className=''>
                                <div class="mb-6">
                                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Min Price</label>
                                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  onChange={(e)=> setMinPrice(e.target.value)}/>
                                </div>
                                <div class="mb-6">
                                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Max Price</label>
                                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  onChange={(e)=> setMaxPrice(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 mx-12 my-6">
                            <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                                {loading ?
                                    <p>Loading category...</p> :
                                    error ? <p>{error}</p> :  
                                    <div className="flex flex-col">
                                        {categories.map(item => (
                                            <label className=" cursor-pointer inline-flex items-center mt-3">
                                                <input type="checkbox"  className=" h-5 w-5 text-gray-600" onClick={() => setCategory(item)} />
                                            <span className="ml-2 text-gray-700" >{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                } 
                        </div>
                        <div className="space-y-2 mx-12 my-6">
                            <button type="submit" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Apply Filters</button>
                        </div>
                    </form>
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

export default Category
