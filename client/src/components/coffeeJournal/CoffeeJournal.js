import React from "react";
import Nav from "../UI/Nav";
import Card from "./Card";
import Table from "./Table";
import { getUserJournal } from "../../helpers/api";

const CoffeeJournal = () => {
  return (
    <div className="h-screen border bg-main">
      <Nav />
      <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
        <Table />
      </section>
    </div>
  );
};

export default CoffeeJournal;
