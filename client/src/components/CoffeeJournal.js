import React from 'react'
import Nav from './Nav'
import { useMutation, useQueryClient } from 'react-query'


const CoffeeJournal = () => {

  const queryClient = useQueryClient()

  const [ user ] = queryClient.getQueryData(['userData'])
  const { journal } = user
  
  if (!user) return <p>Loading...</p>

  console.log(journal)
 
  
  return (
    <div className="h-screen border bg-main">
    <Nav />
    <section className="flex flex-col w-screen h-5/6 justify-center items-center bg-main ">
      <div className="flex flex-col justify-center items-center font-Roboto mt-16 mb-12 text-xl text-contrast gap-4">
        {
          journal.map(coffee => <p>{coffee.brew}</p>)
        }
      </div>
    </section> 
  </div>
  )
}

export default CoffeeJournal
