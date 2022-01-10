import Journal from '../models/journal_model.js';
import Roaster from '../models/roaster_model.js';
import Coffee from '../models/coffee_model.js';
import User from '../models/user_model.js';

export const getUserJournal = async (req, res) => {
  console.log('request reached controller');
  const { user } = req.query;
  try {
    const allJournals = await User.find({ _id: user })
      .populate({
        path: 'journal',
        populate: {
          path: 'coffee',
          model: 'Coffee',
        },
      })
      .populate({
        path: 'journal',
        populate: {
          path: 'roaster',
          model: 'Roaster',
        },
      });
    res.status(200).json(allJournals);
  } catch (err) {
    res.status(404).json({ message: 'error fetching all coffees' });
    console.log(err);
  }
};

export const createJournalEntry = async (req, res) => {
  try {
    // create new entry object from the request
    const newJournalEntry = { ...req.body };
    //use mongoose to add to the collection
    const createdEntry = await Journal.create(newJournalEntry);
    // pull the user from the db
    const [updatedUser] = await User.find({ _id: req.body.user });
    // add the _id of the newly created journal entry into the user's 'journals' array
    updatedUser.journal.push(createdEntry._id);
    //save
    await updatedUser.save({ validateModifiedOnly: true });
    res.status(200).json(newJournalEntry);
  } catch (err) {
    res.status(404).json({ message: 'error posting new journal entry' });
    console.log(err);
  }
};
