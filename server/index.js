import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to database")
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/user', userRoute)
app.use('/auth', authRoute)

app.listen(8000, () => {
  console.log("Server is running")
})