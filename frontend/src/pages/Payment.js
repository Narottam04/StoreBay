import React, { useEffect,  useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import {savePaymentMethod} from '../actions/cartActions'

const Payment = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const {cartItems,shippingAddress} = cart

    if(!shippingAddress){
        navigate('/shipping')
    }

    const dispatch = useDispatch()
    const [paymentMethod,setPaymentMethod] = useState('PayPal')
    const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }   
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.qty * item.price, 0).toFixed(2)

    const shippingCharges = totalCartPrice > 100 ? 0 : 10;

    const totalQty = cartItems.reduce((acc,item) => acc + item.qty,0)

    useEffect(() => {
        if(!userInfo) {
            navigate('/login')
        }
    }, [userInfo])
    return (
        <div className="overflow-y-hidden">
            <Navbar/>
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-bold leading-7 lg:leading-9 text-gray-800">Payment Method</p>
                        </div>
                        <div className="mt-2 mb-8">
                            <a href="javascript:void(0)" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col ">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="paymentType" value="PayPal" onClick={(e)=> setPaymentMethod(e.target.value)}/>
                                <span className="ml-2 text-xl font-semibold">PayPal or Credit Card</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mb-5">
                                <input type="radio" className="form-radio" name="paymentType" value="Stripe" onClick={(e)=> setPaymentMethod(e.target.value)}/>
                                <span className="ml-2 text-xl font-semibold">Stripe</span>
                            </label>
                            <button type="submit" class=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Proceed To Payment</button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total items</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{totalQty}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${totalCartPrice}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${shippingCharges}</p>
                            </div>
                            {/* <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">$3520</p>
                            </div> */}
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">${Number(totalCartPrice) + Number(shippingCharges)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Payment
