import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const coffeeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  origin: { type: String, required: true },
  producer: { type: String },
  process: { type: String, required: true },
  profile: { type: String, required: true },
  notes: [{ type: String }],
  price: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  roaster: { type: mongoose.Schema.ObjectId, ref: 'Roaster', required: true },
})

coffeeSchema.plugin(uniqueValidator)

export default mongoose.model('Coffee', coffeeSchema)
