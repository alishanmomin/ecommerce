import express, { json } from 'express'
import path from 'path'
import morgan from 'morgan';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'




dotenv.config();

connectDB()

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)
app.use('/api/upload', uploadRoutes)

const PAYPAL_CLIENT_ID = "AWs3iBqe_wXHc0LeePOmvwRuTrymetVGmPa57mXfR0mm1DVGpkmZf477S8sorVzdsyLHOMHRY33gEyuH"
app.use('/api/config/paypal', (req, res) => res.send(PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

let myEnv = "production"

if (myEnv == 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${PORT}`))