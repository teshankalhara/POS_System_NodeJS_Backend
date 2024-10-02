import express from 'express'
import { createCategory,getCategory } from '../controller/CategoryController'

const router=express.Router()

router.post('/create',createCategory)
router.get('/get',getCategory)

export default router