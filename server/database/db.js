import mongoose from 'mongoose'

export const Connection = async (USERNAME, PASSWORD) => {
    const ENCODED_PASSWORD = encodeURIComponent(PASSWORD);
    console.log("========================> username and password for database = ", USERNAME, " and ", PASSWORD)
    const URL = `mongodb+srv://${USERNAME}:${ENCODED_PASSWORD}@cluster0.puwub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("====================> Database connected successfully !")
    }
    catch (error) {
        console.log('====================> Error while connecting with database', error.message)
    }
}

export default Connection;