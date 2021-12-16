import mongoose from 'mongoose'
import Coffee  from '../models/coffee_model.js'
import Roaster from '../models/roaster_model.js'

export const getCoffees = async (req, res) => {
  console.log('request reached controller')
  try {
    const allCoffees = await Coffee.find().populate('roaster')
    res.status(200).json(allCoffees)
  } catch (err) {
    res.status(404).json({ message: 'error fetching all coffees' })
    console.log(err)
  }
}

export const testRoute = async (req, res) => {
  console.log('request reached controller')
  console.log(req.body)
  try {
    const allCoffees = await Coffee.find({ ...req.body }).populate('roaster')
    console.log(allCoffees)
    res.status(200).json(allCoffees)
  } catch (err) {
    res.status(404).json({ message: 'error fetching all coffees' })
    console.log(err)
  }
}

export const createCoffee = async (req, res) => {
  console.log(req.body)
  try {
    const newCoffee = { ...req.body }
    const addCoffee = await Coffee.create(newCoffee)
    return res.status(201).json(addCoffee)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}
export const createRoaster = async (req, res) => {
  try {
    const { newRoaster } = { ...req.body }
    const addRoaster = await Coffee.create(newRoaster)
    return res.status(201).json(addRoaster)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}