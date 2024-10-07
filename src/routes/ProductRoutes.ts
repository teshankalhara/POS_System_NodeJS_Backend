import express from 'express'
import { createProduct, getProduct, updateProduct } from '../controller/ProductController'

const router = express.Router()

router.get('/get', getProduct)
router.post('/create', createProduct)
router.post('/:id', updateProduct)

export default router
