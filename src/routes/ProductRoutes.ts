import express from 'express'
import { createProduct,getProduct } from '../controller/ProductController'

const router=express.Router()

router.get('/get',createProduct)
router.post('/create',createProduct)

export default router
