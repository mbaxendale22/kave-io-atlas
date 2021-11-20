import express from 'express'
import mongoose from 'mongoose'
import router from './config/router.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

const startServer = async () => {
  await mongoose.connect(process.env.DB_URI)
  console.log('db connected successfully')

  app.use(express.json())
  app.use((req, _res, next) => {
    console.log(`incoming ${req.method} REQUEST, from ${req.url}`)
    next()
  })
  app.use(router)
  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  })
}

startServer()


