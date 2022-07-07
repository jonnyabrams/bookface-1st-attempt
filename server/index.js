import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helment'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()

app.listen(8000, () => {
  console.log("Server is running")
})