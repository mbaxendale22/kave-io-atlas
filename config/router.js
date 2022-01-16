import express from 'express';
import {
  getCoffees,
  testRoute,
  createCoffee,
  createRoaster,
} from '../controllers/coffees.js';
import { login, register } from '../controllers/auth.js';
import { addToJournal, getUserJournal } from '../controllers/journal.js';

const router = express.Router();

router.route('/coffee').get(getCoffees);
router.route('/coffee/test').get(testRoute);
router.route('/journal').get(getUserJournal).post(addToJournal);
router.route('/users').get()
router.route('/login').post(login);
router.route('/register').post(register);
router.route('/add-coffee').post(createCoffee);

router.route('/add-roaster').post(createRoaster);

export default router;
