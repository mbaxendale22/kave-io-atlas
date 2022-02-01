import React from 'react'

const Buttons = ({ question, setQuestion, mainOperation, mainFunction, buttonType }) => {
  return (
    <div className="w-full flex justify-evenly font-Montserrat">
      <div
        onClick={() =>
          question === 0 ? setQuestion(0) : setQuestion(question - 1)
        }
        className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast "
      >
        PREV
      </div>
      <button
        onClick={mainFunction}
        type={buttonType}
        className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast uppercase "
      >
        {mainOperation}
      </button>
      <div
        onClick={() =>
          question === 4 ? setQuestion(4) : setQuestion(question + 1)
        }
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast"
      >
        NEXT
      </div>
    </div>
  )
}

export default Buttons
