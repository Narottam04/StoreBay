import React, { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {PayPalButton} from 'react-paypal-button-v2'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { deliverOrderDetails, getOrderDetails, payOrderDetails } from "../actions/orderActions";
import Loader from "../components/Loader";
import { ORDER_PAY_RESET,ORDER_DELIVER_RESET } from "../constants/orderConstants";


const PostOrder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {id} = useParams()

    const [sdkReady,setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const {order, loading, error} = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const {loading:loadingPay, success:successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const {loading:loadingDeliver, success:successDeliver } = orderDeliver
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(!userInfo) {
            navigate('/')
        }
        const addPayPalScript = async () => {
            const {data: clientId} = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }

        if(!order || successPay || successDeliver) {
            dispatch({type: ORDER_PAY_RESET})
            dispatch({type: ORDER_DELIVER_RESET})
            dispatch(getOrderDetails(id))
        }
        else if(!order.isPaid) {
            if(!window.paypal) {
                addPayPalScript()
            }
            else {
                setSdkReady(true)
            }
        }
    },[dispatch,id,successPay,successDeliver,order])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrderDetails(id,paymentResult))
    }

    const deliverHandler = () => {
        dispatch(deliverOrderDetails(order))
    }

    return loading ? <Loader/> : error ? <p>{error}</p>: 
    <div>
            <Navbar/>
            <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
                    <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
                        {
                            order.isPaid ?
                            <div>
                                <p className="text-base leading-none mt-4 text-indigo-800 font-extrabold mb-2">
                                    THANK YOU!
                                </p>
                                <h3 className="text-3xl xl:text-4xl leading-7 xl:leading-9 w-full font-bold  md:text-left text-gray-800">It's on the way!</h3>
                                <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                    Your order {order._id} has been shipped and will be with you soon.
                                </p>
                            </div>
                            :
                            <div>
                                <p className="text-base leading-none mt-4 text-indigo-800 font-extrabold mb-2">
                                    FINAL STEP! 
                                </p>
                                <h3 className="text-3xl xl:text-4xl leading-7 xl:leading-9 w-full font-bold  md:text-left text-gray-800">Payment</h3>
                                <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                    Your Order ID is {order._id}.
                                </p>
                            </div>
                        }
                        {
                            order.isPaid ?
                            <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                            Order Payment Status: <span className="text-green-700 bg-green-100 rounded-lg px-2 py-1">Paid on {order.paidAt.substring(0,10)}</span>
                            </p>
                            :
                            <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                Order Payment Status: <span className=" text-red-700 bg-red-100 rounded-lg px-2 py-1">Not Paid</span>
                            </p>
                        }
                        {
                            order.isDelivered ?
                            <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                            Order Delivery Status: <span className="text-green-700 bg-green-100 rounded-lg px-2 py-1">Delivered on {order.deliveredAt.substring(0,10)}</span>
                            </p>
                            :
                            <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                Order Delivery Status: <span className=" text-red-700 bg-red-100 rounded-lg px-2 py-1">Not Delivered</span>
                            </p>
                        }
                        {loadingDeliver && <p>Loading delivery status update button...</p>}
                        {
                            userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                <button type="button" class="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={deliverHandler}>Order Delivered Successfully</button>
                            )
                        }
                        {/* for Admin Users */}
                        <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                            {/* products */}
                            {
                                order.orderItems.map(item => (
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
                                    <p className="text-sm leading-5 text-gray-600">
                                        <span className="font-bold">Name:</span> {order.user.name}
                                    </p>
                                    <a href={`mailto:${order.user.email}`} className="text-sm leading-5 text-gray-600 underline">
                                        <span className="font-bold">Email:</span> {order.user.email}
                                    </a>
                                    <p className="text-sm leading-5 text-gray-600">
                                        {order.shippingAddress.address}
                                    </p>
                                </div>
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Shipping Method</p>
                                    <p className="text-sm leading-5 text-gray-600">DHL - Takes up to 3 working days</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
 
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Payment Method:</p>
                                        <p className="text-base leading-4 text-gray-600">{order.paymentMethod}</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Quantity</p>
                                        <p className="text-base leading-4 text-gray-600">{ order.orderItems.reduce((acc,item) => acc + item.qty,0)}</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">${order.orderItems.reduce((acc,item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${order.totalPrice}</p>
                                </div>
                                <p>{error && error}</p>
                                {/* <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                    <button type="button" disabled={order.orderItems === 0}  className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Pay Using {order.paymentMethod}</button>
                                </div> */}
                                {!order.isPaid && (
                                    <div>
                                        {loadingPay && <Loader/>}
                                        {!sdkReady ? <Loader/> : (
                                            <div className="m-auto w-[60%] pt-6">
                                                <PayPalButton  amount={order.totalPrice} onSuccess={successPaymentHandler}/>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {order.isPaid && 
                <div>    
                    <img src="/gif/celebration.gif" alt="" className="absolute bottom-0 left-0 h-[30vh] " />
                    <img src="/gif/celebration.gif" alt="" className="absolute bottom-0 right-0 h-[30vh]  " />
                </div>
            }
            <Footer/>
        </div>
}

export default PostOrder
