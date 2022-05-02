import jwt from 'jsonwebtoken'
import User from '../model/User.js'
import asynchandler from 'express-async-handler'



const protect = asynchandler(async (req, res, next) => {

    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, "abc123")

            req.user = await User.findById(decoded.id).select('-password')
            next()

        } catch (error) {

            console.log(error)
            res.status(401)
            throw new Error('Not authorized, token fail');

        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token');
    }
})

export const userAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error('Not admin');
    }

}
export default protect;