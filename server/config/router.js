import express from 'express'
import { getCoffees } from '../controllers/coffees.js'

const router = express.Router()

router.route('/coffee')
  .get(getCoffees)

export default router