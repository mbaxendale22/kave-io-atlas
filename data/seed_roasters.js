import mongoose from 'mongoose';
import Journal from '../models/journal_model.js';
import Roaster from '../models/roaster_model.js';
import dotenv from 'dotenv';

dotenv.config();

const init = {
  name: 'Test Roaster',
  website: 'testroaster.com',
  region: 'London',
  about: 'this is a test roaster',
};

const addData = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('connection open');

    const roasters = await Roaster.create(init);
    console.log(`db seeded with ${roasters.length} documents`);

    await mongoose.connection.close();
    console.log('connection closed');
  } catch (err) {
    await mongoose.connection.close();
    console.log('connection closed due to error');
    console.log(err);
  }
};

addData();
