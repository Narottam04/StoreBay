import React, { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { createOrder } from "../actions/orderActions";

const PlaceOrder = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems,shippingAddress,paymentMethod} = cart

    const navigate = useNavigate()

    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.qty * item.price, 0).toFixed(2)
    const shippingCharges = totalCartPrice > 100 ? 0 : 10;
    const totalQty = cartItems.reduce((acc,item) => acc + item.qty,0)
    const finalTotal = Number(totalCartPrice) + Number(shippingCharges)

    const orderCreate = useSelector(state => state.orderCreate)
    const {order, success, error} = orderCreate

    useEffect(() => {
        if(success) {
            navigate(`/order/${order._id}`)
            // navigate(`/`)
        }
        // eslint-disable-next-line
    },[success])

    const placeOrderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: totalCartPrice,
            shippingPrice: shippingCharges,
            totalPrice: finalTotal,
        }))
        
    }

    return (
        <div>
            <Navbar/>
            <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
                    <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
                        <h3 className="text-3xl xl:text-4xl leading-7 xl:leading-9 w-full font-bold  md:text-left text-gray-800">Order Summary</h3>
                        <p className="text-base leading-none mt-4 text-purple-800 font-semibold">
                            Paid using {paymentMethod} 
                        </p>
                        <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                            {/* products */}
                            {
                                cartItems.map(item => (
                                    <div key={item.product} className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                                        <div className="w-40 md:w-32">
                                            <img className="hidden md:block" src={item.image} alt="customer-products" />
                                            <img className="md:hidden " src={item.image} alt="customer-products" />
                                        </div>
                                        <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                            <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                                <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">{item.name}</h3>
                                                <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                                    <p className="text-sm leading-none text-gray-600">
                                                        Category: <span className="text-gray-800">{item.category}</span>
                                                    </p>
                                                    <p className="text-sm leading-none text-gray-600">
                                                        Quantity: <span className="text-gray-800">{item.qty}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${item.qty * item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                            <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Billing Address</p>
                                    <p className="text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Shipping Address</p>
                                    <p className="text-sm leading-5 text-gray-600">{shippingAddress.address}</p>
                                    <p className="text-sm leading-5 text-gray-600">{shippingAddress.address2}</p>
                                </div>
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Shipping Method</p>
                                    <p className="text-sm leading-5 text-gray-600">DHL - Takes up to 3 working days</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Quantity</p>
                                        <p className="text-base leading-4 text-gray-600">${totalQty}</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">${totalCartPrice}</p>
                                    </div>
                                    {/* <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">
                                            Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                        </p>
                                        <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                    </div> */}
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Shipping Charges</p>
                                        <p className="text-base leading-4 text-gray-600">${shippingCharges}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${Number(totalCartPrice) + Number(shippingCharges)}</p>
                                </div>
                                <p>{error && error}</p>
                                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                    <button type="button" disabled={cartItems === 0} onClick={placeOrderHandler} className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Place Your Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default PlaceOrder
