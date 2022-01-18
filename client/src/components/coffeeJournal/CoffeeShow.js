import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import { getUserJournalEntry, updateUserJournalEntry, deleteUserJournalEntry } from '../../helpers/api';
import EditEntry from './EditEntry';
import Card from './Card'

const CoffeeShow = () => {
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  
  const { data: entry, isLoading, isError } = useQuery('currentEntry', () =>
  getUserJournalEntry(id)
  );
  
  const [journalData, setJournalData] = useState(entry)
  const queryClient = useQueryClient()
  
  const handleChange = e => {
    const newJournalData = { ...journalData, [e.target.name]: e.target.value }
    setJournalData(newJournalData)
  }
  
  const { mutate: updateEntry } = useMutation(() => updateUserJournalEntry(entry._id, journalData), {
    onSuccess: () => {
      queryClient.setQueryData(['currentEntry'], journalData)
      setEditing(false)
    },
    onError: () => setError(true)
  })
  const { mutate: deleteEntry, isError: deleteError } = useMutation()

  
  if (isLoading) return <p>Loading...</p>;
  

  return (
    <div className="h-screen border bg-main">
      <Nav />
      <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
        {!editing ? (
         <Card entry={entry} setEditing={setEditing} />
          
        ) : (
        <EditEntry entry={entry} handleChange={handleChange} updateEntry={updateEntry} setEditing={setEditing} />
        )}
      </section>
    </div>
  );
};

export default CoffeeShow;
