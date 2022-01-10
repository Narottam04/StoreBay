import React, { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { saveShippingAddress } from "../actions/cartActions";

export default function Shipping() {

    const cart = useSelector(state => state.cart)
    const {cartItems,shippingAddress} = cart

    const [username,setUsername] = useState(shippingAddress.username)
    const [address,setAddress] = useState(shippingAddress.address)
    const [address2,setAddress2] = useState(shippingAddress.address2)
    const [city,setCity] = useState(shippingAddress.city)
    const [region,setRegion] = useState(shippingAddress.region)
    const [country,setCountry] = useState(shippingAddress.country)
    const [zipCode,setZipCode] = useState(shippingAddress.zipCode)
    const [phoneNumber,setPhoneNumber] = useState(shippingAddress.phoneNumber)

    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.qty * item.price, 0).toFixed(2)

    const shippingCharges = totalCartPrice > 100 ? 0 : 10;

    const totalQty = cartItems.reduce((acc,item) => acc + item.qty,0)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({username,address,address2,city,region,country,zipCode,phoneNumber}))
        navigate('/payment')
    }

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
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2">
                            <a href="javascript:void(0)" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                        </div>
                        <form onSubmit={submitHandler} className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Name" value={username} onChange={(e)=> setUsername(e.target.value)} required />
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)} required/>
                            {/* <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address (line 02)" value={address2} onChange={(e)=> setAddress2(e.target.value)}/> */}
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="City" value={city} onChange={(e)=> setCity(e.target.value)} required/>
                                </div>
                                <div className="relative w-full">
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Region" value={region} onChange={(e)=> setRegion(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Country"value={country} onChange={(e)=> setCountry(e.target.value)} required/>
                                </div>
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Zip Code" value={zipCode} onChange={(e)=> setZipCode(e.target.value)} required/>
                                </div>
                            </div>
                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required/>

                            <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium  focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                        </form>
                        <div className="mt-4 flex justify-start items-center w-full">
                            <a href="javascript:void(0)" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                        </div>
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
    );
}
