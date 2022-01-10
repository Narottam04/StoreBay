import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams,useSearchParams } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../actions/cartActions'


function ShoppingCart() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = useParams()

    const qty = Number(searchParams.get('qty'))
    const productId = params.id

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const {cartItems} = cart

    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.qty * item.price, 0).toFixed(2)

    const shippingCharges = totalCartPrice > 100 ? 0 : 10;

    const totalQty = cartItems.reduce((acc,item) => acc + item.qty,0)

    const checkoutHandler = () => {
        navigate('/shipping')
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    useEffect(()=> {
        if(productId) {
            dispatch(addToCart(productId,qty))
        }
    },[dispatch, productId,qty])

    return (
        <>
            <div>
                <div className="lora-font w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div className="w-full md:pl-10 md:pr-4 md:py-12 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                <Link className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" to="/" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                </Link>
                                    <p className="lora-font text-5xl font-black leading-10 text-gray-800 pt-3">Your Cart</p>
                                    {/* cart items */}
                                    {
                                        cartItems.length === 0 
                                        ?
                                        <p>Your Cart Is empty</p>
                                        :
                                        (
                                            <ul>
                                                {
                                                    cartItems.map(item => (
                                                    <li key={item.product} className="flex items-center mt-14 py-8 border-t border-gray-200">
                                                        <Link to={`/product/${item.product}`}  className="w-60 m-auto m-2 ">
                                                            <img src={item.image} alt className="w-full h-full object-center object-cover" />
                                                        </Link>
                                                        <div className="pl-3 w-3/4">
                                                            {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                                                            <div className="flex items-center justify-between w-full pt-1 flex-initial">
                                                                <Link to={`/product/${item.product}`} className="text-base font-black leading-none text-gray-800 w-44">{item.name}</Link>
                                                            </div>
                                                            <p className="md:py-2 md:px-1  md:mr-6 mt-4 focus:outline-none whitespace-pre ">
                                                                  Quantity: {item.qty}  
                                                                </p>
                                                            <p className=" text-xs leading-3 text-gray-600 pt-4">Brand: {item.brand}</p>
                                                            <p className="text-xs leading-3 text-gray-600 pb-4 pt-2">Category: {item.category}</p>
                                                            {/* <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p> */}
                                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                                <div className="flex itemms-center">
                                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                                    <button onClick={()=>removeFromCartHandler(item.product)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</button>
                                                                </div>
                                                                <p className="text-base font-black leading-none text-gray-800">${item.price}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    )
                                                    )
                                                }
                                            </ul>  
                                        )
                                    }
                                     <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-84 md:hidden p-0">
                                    <div className=" flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Quantity</p>
                                                <p className="text-base leading-none text-gray-800">{totalQty}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">${totalCartPrice}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">${shippingCharges}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">${Number(totalCartPrice) + Number(shippingCharges)}</p>
                                            </div>
                                            <button disabled={cartItems.length === 0} onClick={checkoutHandler}  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                {cartItems.length === 0 ? "Add Items To Cart" : "Checkout"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                {/* Cart summary */}
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full hidden md:block">
                                    <div className=" flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Quantity</p>
                                                <p className="text-base leading-none text-gray-800">{totalQty}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">${totalCartPrice}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">${shippingCharges}</p>
                                            </div>
                                            {/* <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$5</p>
                                            </div> */}
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">${Number(totalCartPrice) + Number(shippingCharges)}</p>
                                            </div>
                                            <button disabled={cartItems.length === 0} onClick={checkoutHandler}  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                {cartItems.length === 0 ? "Add Items To Cart" : "Checkout"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default ShoppingCart;
