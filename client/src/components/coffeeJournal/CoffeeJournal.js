import React from "react";
import Nav from "../Nav";
import { useQuery } from "react-query";
import Card from "./Card";
import Table from "./Table";
import { getUserJournal } from "../../helpers/api";

const CoffeeJournal = () => {
  // const queryClient = useQueryClient()

  // const [ user ] = queryClient.getQueryData('userData')
  // if (!user) return <p>Loading...</p>
  // const { journal } = user

  const { data, isLoading, isError } = useQuery(
    ["userJournal"],
    getUserJournal
  );

  if (isLoading) return <p>Grabbing your coffee journal</p>;

  return (
    <div className="h-screen border bg-main">
      <Nav />
      <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
        <Table journal={data} />
      </section>
    </div>
  );
};

export default CoffeeJournal;
