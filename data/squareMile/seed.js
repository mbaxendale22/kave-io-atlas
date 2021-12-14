import mongoose from 'mongoose'
import Coffee from '../../models/coffee_model.js'
import Roaster from '../../models/roaster_model.js'
import data from './data.js'

const addData = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('connection open')

    const [ sm ] = await Roaster.find({ name: 'Square Mile' })
    console.log(sm._id)

    const coffees = data.map(c => c.roaster = sm._id)
    
    const coffee = await Coffee.create(data)

    console.log(`db seeded with ${data.length} documents`)

    await mongoose.connection.close()
    console.log('connection closed')





  } catch (err) {
    await mongoose.connection.close()
    console.log('connection closed due to error')
    console.log(err)
  }
}

addData()