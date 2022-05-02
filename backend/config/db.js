import mongoose from 'mongoose'




const db = "mongodb+srv://momin123:momin123@cluster0.ipjqz.mongodb.net/mominshop?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDb connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
export default connectDB