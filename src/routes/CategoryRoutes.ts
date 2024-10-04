import express from 'express'
import { createCategory,getCategory } from '../controller/CategoryController'

const router=express.Router()

router.get('/get',getCategory)
router.post('/create',createCategory)

export default router