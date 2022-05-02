import express from 'express'
import {
    authUser, deleteUser, getUser, updateUserById,
    getUserbyId, getUserProfile, registerUser, updateUserProfile
} from '../controllers/userController.js'
const router = express.Router();
import protect from '../middleware/userAuthMiddleware.js'
import userAdmin from '../middleware/userAuthMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser).get(protect, userAdmin, getUser)

router.route('/:id')
    .delete(protect, userAdmin, deleteUser)
    .get(protect, userAdmin, getUserbyId)
    .put(protect, userAdmin, updateUserById)

export default router;

//E:\projects\ecommerce\backend\controllers\productsController