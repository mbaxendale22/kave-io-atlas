import axios from "axios";
import React, { useState } from "react";

const Database = () => {
  const [coffee, setCoffee] = useState({
    title: "",
    origin: "",
    producer: "",
    process: "",
    profile: "",
    notes: "",
    price: "",
    url: "",
    image: "",
    roaster: "",
    description: "",
  });
  const [notes, setNotes] = useState({
    note1: "",
    note2: "",
    note3: "",
  });

  // const [ roaster, setRoaster ] = useState({
  //   name: '' ,
  //   website: '' ,
  //   region: '' ,
  //   about: '' ,
  //   coffees: [],
  // })

  const addBorder = () => {
    const inputs = [
      ...document.querySelectorAll("input"),
      ...document.querySelectorAll("textarea"),
    ];
    inputs.forEach((i) => i.classList.add("form-input"));
  };

  addBorder();

  const handleChange = (e) => {
    if (
      e.target.name === "note1" ||
      e.target.name === "note2" ||
      e.target.name === "note3"
    ) {
      const newNote = { ...notes, [e.target.name]: e.target.value };
      setNotes(newNote);
    } else {
      const newLogin = { ...coffee, [e.target.name]: e.target.value };
      setCoffee(newLogin);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const presubmit = { ...coffee };
    const { note1, note2, note3 } = notes;
    console.log(note1, note2, note3);
    presubmit.notes = [];
    presubmit.notes.push(note1, note2, note3);
    const inputs = [...document.querySelectorAll("input")];
    inputs.forEach((i) => (i.value = ""));
    try {
      await axios.post("/api/add-coffee", presubmit);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-2 border-black p-5 h-5/6 w-full grid grid-cols-4 grid-rows-1 gap-5">
      <form
        onSubmit={handleSubmit}
        className=" flex-c-c border-2 border-gray-500 col-start-1 col-end-3 bg-gray-200 shadow-md"
      >
        <label for="title">Title</label>
        <input onChange={handleChange} type="text" name="title"></input>
        <label for="">Origin</label>
        <input onChange={handleChange} type="text" name="origin"></input>
        <label for="">Producer</label>
        <input onChange={handleChange} type="text" name="producer"></input>
        <label for="">Process</label>
        <input onChange={handleChange} type="text" name="process"></input>
        <label for="">Profile</label>
        <input onChange={handleChange} type="text" name="profile"></input>
        <label for="">Note 1</label>
        <input onChange={handleChange} type="text" name="note1"></input>
        <label for="">Note 2</label>
        <input onChange={handleChange} type="text" name="note2"></input>
        <label for="">Note 3</label>
        <input onChange={handleChange} type="text" name="note3"></input>
        <label for="">Price</label>
        <input onChange={handleChange} type="text" name="price"></input>
        <label for="">url</label>
        <input onChange={handleChange} type="text" name="url"></input>
        <label for="">Image</label>
        <input onChange={handleChange} type="text" name="image"></input>
        <label for="">Roaster</label>
        <input onChange={handleChange} type="text" name="roaster"></input>
        <label for="">Description</label>
        <textarea
          className="form-input"
          type="text"
          name="description"
        ></textarea>
        <button className="mt-2 form-input w-1/2">Submit</button>
      </form>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black col-start-3 col-end-5 bg-gray-200 shadow-md flex-c-c"
      >
        <label for="">Name</label>
        <input type="text" name="price"></input>
        <label for="">Website</label>
        <input type="text" name="url"></input>
        <label for="">Region</label>
        <input type="text" name="image"></input>
        <label for="">Coffees</label>
        <input type="text" name="roaster"></input>
        <label for="">About</label>
        <textarea
          className="form-input"
          type="text"
          name="description"
        ></textarea>
        <button className="mt-2 form-input w-1/2">Submit</button>
      </form>
    </div>
  );
};

export default Database;
