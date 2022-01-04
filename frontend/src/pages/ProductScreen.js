import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { listProductsDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = () => {

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails

    let {id} = useParams()
    useEffect(()=> {
        dispatch(listProductsDetails(id))
     },[dispatch,id])


    return (
        <div>
            <Navbar/> 
            {
                loading ? 
                <Loader/>:
                error ? 
                <Message>{error}</Message>:
                <div>
                    {
                        product &&
                        <p>{product.name}</p>
                    }
                </div>
            }
            <Footer/> 
        </div>
    )
}

export default ProductScreen
