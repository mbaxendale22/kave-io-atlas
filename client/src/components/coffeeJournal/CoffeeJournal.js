import React from 'react'
import Nav from '../Nav'
import { useMutation, useQueryClient } from 'react-query'
import Card from './Card'
import Table from './Table'


const CoffeeJournal = () => {

  const queryClient = useQueryClient()

  const [ user ] = queryClient.getQueryData('userData')
  if (!user) return <p>Loading...</p>
  const { journal } = user
  

  console.log(journal[0].coffee.title)
  console.log(journal[0].coffee.origin)
  console.log(journal[0].roaster.name)
  console.log(journal[0].brew)
  console.log(journal[0].score)
 
  
  return (

    <div className="h-screen border bg-main">
    <Nav />
    <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
    <Table journal={journal} />
    </section> 
  </div>
  )
}

export default CoffeeJournal
