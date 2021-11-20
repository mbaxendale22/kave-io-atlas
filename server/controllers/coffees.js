import mongoose from 'mongoose'
import Coffee  from '../models/coffee_model.js'

export const getCoffees = async (req, res) => {
  console.log('request reached controller')
  try {
    const allCoffees = await Coffee.find().populate('roaster')
    console.log(allCoffees)
    res.status(200).json(allCoffees)
  } catch (err) {
    res.status(404).json({ message: 'error fetching all coffees' })
    console.log(err)
  }
}
