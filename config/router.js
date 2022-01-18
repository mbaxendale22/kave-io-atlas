import express from 'express';
import {
  getCoffees,
  testRoute,
  createCoffee,
  createRoaster,
} from '../controllers/coffees.js';
import { login, register } from '../controllers/auth.js';
import { secureRoute } from './secureRoute.js';
import { addToJournal, deleteJournalEntry, getUserJournal, getUserJournalEntry, updateJournalEntry } from '../controllers/journal.js';


const router = express.Router();

router.route('/coffee').get(getCoffees);
router.route('/coffee/test').get(testRoute);
router.route('/journal/:id').get(secureRoute, getUserJournalEntry).put(secureRoute, updateJournalEntry).delete(deleteJournalEntry)
router.route('/journal').get(secureRoute, getUserJournal).post(secureRoute, addToJournal)
router.route('/users').get()
router.route('/login').post(login);
router.route('/register').post(register);
router.route('/add-coffee').post(createCoffee);

router.route('/add-roaster').post(createRoaster);

export default router;
