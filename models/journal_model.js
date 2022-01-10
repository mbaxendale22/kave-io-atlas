import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const journalSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  coffee: { type: mongoose.Schema.ObjectId, ref: 'Coffee' },
  roaster: { type: mongoose.Schema.ObjectId, ref: 'Roaster' },
  brew: { type: String },
  recipe: { type: String },
  score: { type: Number },
  notes: { type: String, maxlength: 1000 },
});

journalSchema.plugin(uniqueValidator);

export default mongoose.model('Journal', journalSchema);
