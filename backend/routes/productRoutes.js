import express from 'express'
import { createProduct, createProductReview, deleteProduct, getCategoryProducts, getProductById, getProducts, updateProduct } from '../controllers/productController.js'
import { protect,admin } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/category').get(getCategoryProducts)
router.route('/:id/reviews').post(protect,createProductReview)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)



export default router