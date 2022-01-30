import mongoose from 'mongoose'
import Journal from '../models/journal_model.js'
import Roaster from '../models/roaster_model.js'
import dotenv from 'dotenv'

dotenv.config()

const init = {
  user: '61dc6e8f1c46b0f81560e409',
  coffee: '619833a326036b6a8136729d',
  roaster: '619825461a3027c1e19950f3',
  brew: 'Brew Method?',
  recipe: 'What was your brew recipe',
  score: 77,
  notes: 'Any thoughts?',
  tasting: {
    acidity: 0,
    sweetness: 0,
    body: 0,
    finish: 0,
  },
}

const addData = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin_user:cHRQXsogeMiV319P@kave.06ni1.mongodb.net/kave?retryWrites=true&w=majority'
    )
    console.log('connection open')

    const roasters = await Journal.create(init)
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
