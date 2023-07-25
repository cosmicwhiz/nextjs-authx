import mongoose from "mongoose";

let isConnected = false;

const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("MongoDB already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'authx',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("MongoDB connected")
    } catch(error) {
        console.error(error)
    }
}

export default connectToDb