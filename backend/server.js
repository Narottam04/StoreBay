// const express = require('express')
// const products = require('./data/products')
// const dotenv = require('dotenv')

import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import connectDB from './config/db.js'
import  productRoutes from './routes/productRoutes.js'
import  userRoutes from './routes/userRoutes.js'
import  orderRoutes from './routes/orderRoutes.js'
import  uploadRoutes from './routes/uploadRoutes.js'
import  searchRoutes from './routes/searchRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/search', searchRoutes)

app.get('/api/config/paypal',(req,res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
app.get('/', (req,res) => {
    res.send('API IS RUNNING')
})
}

// handling not found page
app.use(notFound)
// custom error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT} `))