import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const roasterSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  website: { type: String, required: true, unique: true },
  region: { type: String, required: true },
  about: { type: String, required: true },
  coffees: [{ type: mongoose.Schema.ObjectId, ref: 'Coffee' }],
})

roasterSchema.plugin(uniqueValidator)

export default mongoose.model('Roaster', roasterSchema)
