import mongoose from 'mongoose'
import User from '../models/user_model.js'
import dotenv from 'dotenv'

dotenv.config()
const dbURI = 'mongodb+srv://admin_user:cHRQXsogeMiV319P@kave.06ni1.mongodb.net/kave?retryWrites=true&w=majority'
console.log(dbURI)

const addData = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('connection open')

    await User.create()


    await mongoose.connection.close()
    console.log('connection closed')

  } catch (err) {
    await mongoose.connection.close()
    console.log('connection closed due to error')
    console.log(err)
  }
}

addData()