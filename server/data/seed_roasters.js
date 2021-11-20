import mongoose from 'mongoose'
import Roaster from '../models/roaster_model.js'
import roasters_data from './roasters_data.js'
import { dbURI } from '../config/env.js'

const addData = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('connection open')

    const roasters = await Roaster.create(roasters_data)
    console.log(`db seeded with ${roasters.length} documents`)

    await mongoose.connection.close()
    console.log('connection closed')
  } catch (err) {
    await mongoose.connection.close()
    console.log('connection closed due to error')
    console.log(err)
  }
}

addData()
