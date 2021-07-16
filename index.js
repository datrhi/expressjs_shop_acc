const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors') 

const authRouter = require('./routes/auth')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learned.efvmy.mongodb.net/mern-learned?retryWrites=true&w=majority`,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
connectDB()
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.use('/', authRouter)
app.listen(port, () => console.log(("EXAMPLE")))