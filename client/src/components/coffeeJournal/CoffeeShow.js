import React, { useState } from 'react'
import Nav from '../UI/Nav'
import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { getUserJournalEntry, updateUserJournalEntry } from '../../helpers/api'
import EditEntry from './EditEntry'
import Card from './Card'
import Modal from '../UI/ConfirmationModal'

const CoffeeShow = () => {
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const { id } = useParams()
  const [singleJournalData, setSingleJournalData] = useState(null)
 

  useState(() => {
    const getData = async () => {
      const data = await getUserJournalEntry(id)
      setSingleJournalData(data)
    }
    getData()
  }, [id])


  const queryClient = useQueryClient()

  const handleChange = (e, metric) => {
    let newJournalData = {}

    if (e.target.name === 'score') {
      newJournalData = {
          ...singleJournalData,
          [e.target.name]: Number(e.target.value),
        }
    } 
    
    if (e.target.name === metric ) {
      newJournalData = { ...singleJournalData }
      newJournalData.tasting[metric] = Number(e.target.value)
    }
    
    else {
      newJournalData = {
          ...singleJournalData,
          [e.target.name]: e.target.value,
        }
    }
    setSingleJournalData(newJournalData)
  }

  const { mutate: updateEntry } = useMutation(
    () => updateUserJournalEntry(singleJournalData._id, singleJournalData),
    {
      onSuccess: () => {
        queryClient.setQueryData(['currentEntry'], singleJournalData)
        setEditing(false)
      },
      onError: () => setError(true),
    }
  )

  if (!singleJournalData) return <p>Loading...</p>

  return (
    <div className="h-screen bg-main relative">
      <Nav />
      {modal && (
        <Modal
          question={'delete this coffee from your journal?'}
          setModal={setModal}
          entry={singleJournalData._id}
        />
      )}
      <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
        {!editing ? (
          <Card
            entry={singleJournalData}
            setEditing={setEditing}
            setModal={setModal}
          />
        ) : (
          <EditEntry
            entry={singleJournalData}
            handleChange={handleChange}
            updateEntry={updateEntry}
            setEditing={setEditing}
          />
        )}
      </section>
    </div>
  )
}

export default CoffeeShow
