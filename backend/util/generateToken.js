import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    return jwt.sign({ id }, "abc123", {
        expiresIn: '30d'
    })
}