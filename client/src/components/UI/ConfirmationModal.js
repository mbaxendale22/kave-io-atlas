import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteUserJournalEntry } from "../../helpers/api";
import { useHistory } from "react-router-dom";

const Modal = ({ question, setModal, entry }) => {
  const { mutate } = useMutation(deleteUserJournalEntry, {
    onSuccess: () => {},
  });
  const queryClient = useQueryClient();
  const history = useHistory();
  const handleDelete = async () => {
    await mutate(entry);
    await queryClient.invalidateQueries("userJournal");
    history.push("/journal");
  };
  return (
    <div className="w-screen absolute top-0 bottom-0 bg-gray-300 bg-opacity-50 flex justify-center items-center font-Roboto">
      <div className=" w-3/4 sm:w-1/2 h-1/2 rounded-xl shadow-xl bg-white flex flex-col justify-center items-center space-y-8">
        <p className=" text-base text-center sm:text-lg px-4">{question}</p>
        <div className="flex justify-evenly w-full">
          <button
            onClick={handleDelete}
            className="bg-main p-4 rounded-lg hover:bg-green-400"
          >
            CONFIRM
          </button>
          <button
            onClick={() => setModal(false)}
            className="bg-red-400 p-4 rounded-lg hover:bg-red-500"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
