import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Link to={`/product/${product._id}`} key={product._id} className="group relative ">
              <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base w-[200px] font-semibold text-gray-700">
                    <a href="/" >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <h3 className="text-base font-semibold text-gray-500">
                    <Rating value={product.rating} text = {`${product.numReviews} reviews`}  />
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-md font-medium text-gray-900">${product.price}</p>
              </div>
        </Link>
    )
}

export default Product
