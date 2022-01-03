import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'

const ProductScreen = ({match}) => {
    const [product, setProduct] = useState([])
    let {id} = useParams()
    useEffect(()=> {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${id}`)
             setProduct(data)
        } 
        fetchProduct()
     },[id])

    return (
        <div>
            <Navbar/> 
            {product.name}
            <Footer/> 
        </div>
    )
}

export default ProductScreen
