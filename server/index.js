import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'
import postRoute from './routes/postRoute.js'

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to database")
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/images', express.static(path.join(__dirname, 'public/images')))

// middleware
app.use(express.json())
app.use(helmet({
  crossOriginResourcePolicy: false,
}))
app.use(morgan("common"))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploaded successfully')
  } catch (error) {
    console.log(error)
  }
})

app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/post', postRoute)

app.listen(8000, () => {
  console.log("Server is running")
})