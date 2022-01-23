import Journal from '../models/journal_model.js';
import Roaster from '../models/roaster_model.js';
import Coffee from '../models/coffee_model.js';
import User from '../models/user_model.js';

export const getUserJournal = async (req, res) => {
  console.log('request reached controller');
  try {
    const allJournals = await User.find({ _id: req.currentUser })
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
    const journal = allJournals[0].journal
    res.status(200).json(journal);
  } catch (err) {
    res.status(404).json({ message: 'error fetching all coffees' });
    console.log(err);
  }
};

export const getUserJournalEntry = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const journalEntry = await Journal.find({ _id: id })
      .populate({
        path: 'coffee',
        model: 'Coffee',
      })
      .populate({
        path: 'roaster',
        model: 'Roaster',
      });

    res.status(200).json(journalEntry);
  } catch (err) {
    res.status(404).json({ message: 'error fetching journal entry' });
    console.log(err);
  }
};

export const addToJournal = async (req, res) => {
  try {
    // create new entry object from the request
    const newJournalEntry = { ...req.body };
    //use mongoose to add to the collection
    const createdEntry = await Journal.create(newJournalEntry);
    // pull the user from the db
    const [updatedUser] = await User.find({ _id: req.currentUser });
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

export const updateJournalEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const updateEntry = await Journal.findByIdAndUpdate(id, req.body);
    if (!updateEntry) throw new Error();
    return res.status(200).json({ message: 'journal entry has been updated' });
  } catch (err) {
    return res.status(200).json(err);
  }
};

export const deleteJournalEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const removeEntry = await Journal.findByIdAndDelete(id);
    if (!removeEntry) throw new Error();
    return res.status(200).json({ message: 'entry has been deleted!' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
