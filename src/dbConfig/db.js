import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL)

        mongoose.connection.on("connected", () => {
            console.log("Connected to database")
        })
    } catch (error) {
        console.log("Failed to connect to database ", error)
    }
}