import express from 'express'
import { addOrdersItem, updateOrderToDeliver, getMyorders, getAllOrder, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
const router = express.Router();
import protect from '../middleware/userAuthMiddleware.js'
import userAdmin from '../middleware/userAuthMiddleware.js'



router.route('/').post(protect, addOrdersItem).get(protect, userAdmin, getAllOrder)
router.route('/myorders').get(protect, getMyorders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, userAdmin, updateOrderToDeliver)

export default router;
