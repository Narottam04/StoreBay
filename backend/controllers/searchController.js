import asyncHandler from 'express-async-handler'
import mongoose  from 'mongoose';
import Product from '../models/productModel.js'

// @desc search all products
// @route GET /api/search
// @access Public
const searchProducts = asyncHandler(async(req,res) => {
    let result = await Product.aggregate([
        {
            "$search": {
                "autocomplete": {
                    "query": `${req.query.query}`,
                    "path": "name",
                    "fuzzy": {
                        "maxEdits": 2,
                        "prefixLength": 3
                    }
                }
            }
        }
    ]);
    if(result){
        res.json(result)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc search category products
// @route GET /api/search/category
// @access Public
const searchFilterProducts = asyncHandler(async(req,res) => {
    let result = await Product.aggregate([
        {
            "$search": {
                "autocomplete": {
                    "query": `${req.query.query}`,
                    "path":  "category",
                    "fuzzy": {
                        "maxEdits": 2,
                        "prefixLength": 3
                    }
                },
            }
        }
    ]);
    if(result){
        res.json(result)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})




export {searchProducts,searchFilterProducts}