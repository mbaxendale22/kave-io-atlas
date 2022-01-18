import React from 'react'
import Nav from '../Nav'
import { useQuery, useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import { getUserJournalEntry } from '../../helpers/api'



const CoffeeShow = () => {

  const { id } = useParams()

const { data } = useQuery( 'currentEntry', getUserJournalEntry(id))
const [ entry ] = data 
console.log(entry.coffee)

  return (
    <div className="h-screen border bg-main">
    <Nav />
    <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <div class="w-full block h-full">
        <img alt="map of coffee region" src={entry.coffee.image} class="max-h-40 w-full object-cover"/>
        <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {entry.coffee.title}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
            </p>
        </div>
    </div>
</div>

    {/* FORM FOR UPDATING */}
    </section> 
  </div>
  )
}

export default CoffeeShow
