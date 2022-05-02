import express from 'express'
import protect from '../middleware/userAuthMiddleware.js'
import userAdmin from '../middleware/userAuthMiddleware.js'
import { getProductById, getProducts, deleteProduct, createProduct, updateProduct, createProductReview } from '../controllers/productsController.js'

const router = express.Router();


router.route('/:id')
    .get(getProductById)
    .delete(protect, userAdmin, deleteProduct)
    .put(protect, userAdmin, updateProduct)

router.route('/:id/reviews')
    .post(protect, createProductReview)

router.route('/')
    .get(getProducts)
    .post(protect, userAdmin, createProduct)

export default router;

//E:\projects\ecommerce\backend\controllers\productsController