import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'



const journalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  coffee: { type: mongoose.Schema.ObjectId, ref: 'Coffee' },
  roaster: { type: mongoose.Schema.ObjectId, ref: 'Roaster' },
  brew: { type: String },
  recipe: { type: String },
  score: { type: Number },
  notes: { type: String, maxlength: 1000 },
  tasting: {
    acidity: { type: Number },
    sweetness: { type: Number },
    body: { type: Number },
    finish: { type: Number }
  }
})

journalSchema.plugin(uniqueValidator)

export default mongoose.model('Journal', journalSchema)
