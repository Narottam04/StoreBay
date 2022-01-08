// const express = require('express')
// const products = require('./data/products')
// const dotenv = require('dotenv')

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import  productRoutes from './routes/productRoutes.js'
import  userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()


app.get('/',(req,res) => {
    res.send('API IS RUNNING')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// handling not found page
app.use(notFound)
// custom error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT} `))