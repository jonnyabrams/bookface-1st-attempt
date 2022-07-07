import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to database")
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("dev")) // was getting deprecation warning due to import syntax, adding "dev" stops this

app.listen(8000, () => {
  console.log("Server is running")
})