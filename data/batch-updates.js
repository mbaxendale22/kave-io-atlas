import mongoose from 'mongoose';
import Coffee from '../models/coffee_model.js';
import Roaster from '../models/roaster_model.js';
import dotenv from 'dotenv';
dotenv.config();


const addData = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('connection open');

    const origin = await Coffee.updateMany({ 'origin': 'Kenya' }, { '$set': { 'image': 'https://res.cloudinary.com/dzw0xz5ie/image/upload/v1642951186/maps%20for%20kave/map-kenya_qy9mso.png' } })
    
    await mongoose.connection.close();
    console.log('connection closed');
  } catch (err) {
    await mongoose.connection.close();
    console.log('connection closed due to error');
    console.log(err);
  }
};

addData();