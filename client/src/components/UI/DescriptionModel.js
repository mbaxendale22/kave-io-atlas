import React from 'react'

const DescriptionModal = ({ description, setModalDescription }) => {
  return (
    <div className=" flex flex-col justify-center gap-8 items-center font-Roboto min-h-full border-black border-2">
      <p className=" text-sm text-center px-4">{description}</p>
      <div className="flex justify-evenly w-full">
        <button
          onClick={() => setModalDescription(false)}
          className="bg-light text-contrast py-2 px-4 rounded-lg hover:bg-contrast hover:text-light"
        >
          BACK
        </button>
      </div>
    </div>
  )
}

export default DescriptionModal
