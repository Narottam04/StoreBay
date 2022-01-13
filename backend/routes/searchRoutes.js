import express from 'express'   
import { searchFilterProducts, searchProducts } from '../controllers/searchController.js'
const router = express.Router()

router.route("/").get(searchProducts)
router.route("/category").get(searchFilterProducts)

export default router
