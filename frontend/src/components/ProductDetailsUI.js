import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductReview from "./ProductReview";
import Rating from "./Rating";

const ProductDetailsUI = ({product}) => {
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(1);
    let {id} = useParams()
    const navigate = useNavigate()


    const addCount = () => {
        if(count < product.countInStock ){
            setCount((prev) => prev + 1);
        }
        else {
            alert(`Only ${product.countInStock } in stock`)
        }
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${count}`)
    }

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600"><Link className="underline" to={'/'}>Home</Link>/ <Link className="underline" to={'/category'}>Product</Link> / {product.name}</p>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{product.name}</h2>

                    <div className=" flex flex-row justify-between  mt-5">
                        <div className=" flex flex-row space-x-3">
                            <Rating value={product.rating} text = {`${product.numReviews} reviews`} />
                        </div>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{product.description}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${product.price}</p>

                    <div className="lg:mt-11 mt-10">
                        <form  className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                    -
                                </span>
                                <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                                <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                    +
                                </span>
                            </div>
                        </form>
                        
                        {/* <hr className=" bg-gray-200 w-full my-2" />
                        <div className=" flex flex-row justify-between items-center mt-4">
                            <p className="font-medium text-base leading-4 text-gray-600">Dimensions</p>
                            <svg onClick={() => setRotate(!rotate)} id="rotateSVG" className={"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " + (rotate ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div> */}
                        <hr className=" bg-gray-200 w-full mt-4" />
                    </div>
                    {
                        product.countInStock > 0 ?
                        <button onClick={addToCartHandler} className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">Add to shopping bag</button>
                        :
                        <button className="focus:outline-none disabled: focus:ring-2 hover:bg-red focus:ring-offset-2 focus:ring-red-800 font-medium text-base leading-4 text-white bg-red-800 w-full py-5 lg:mt-12 mt-6">Out Of Stock</button>
                    }
                </div>

                {/* <!-- Preview Images Div For larger Screen--> */}

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full bg-white flex justify-center items-center">
                        <img src={product.image} alt="product image" />
                    </div>
                    
                </div>
            </div>
            <div><ProductReview/></div>
        </div>
    );
};

export default ProductDetailsUI;
