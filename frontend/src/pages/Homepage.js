import React,{useEffect, useState} from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import axios from 'axios'

const Homepage = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
       const fetchProducts = async () => {
        // initially it will look into 300 port - 404 error
        // if you add localhost:5000 in axios get it will throw a CORS error
        // to fetch the data  we need to set proxy in package.json
           const {data} = await axios.get('/api/products')
            setProducts(data)
       } 
       fetchProducts()
    },[])

    return (
        <div>
            <Navbar/> 
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
            <Footer/>
        </div>
    )
}

export default Homepage
