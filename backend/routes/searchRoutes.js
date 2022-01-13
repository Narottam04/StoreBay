import express from 'express'   
import { searchProducts } from '../controllers/searchController.js'
const router = express.Router()

router.route("/").get(searchProducts)

export default router
