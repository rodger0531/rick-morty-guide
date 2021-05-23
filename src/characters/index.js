import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { BottomControls } from "./bottom-controls";
import { TopControls } from "./top-controls";
import { CharacterList } from "./character-list";
import { GET_CHARACTERS } from "../graphql/queries";

const CharacterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState({ name: "", species: "" });
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      species: filterParams.species,
      name: filterParams.name,
    },
  });

  return (
    <div className="h-full flex flex-col justify-between">
      <TopControls
        setFilterParams={setFilterParams}
        setCurrentPage={setCurrentPage}
      />
      <CharacterList data={data} error={error} loading={loading} />
      <BottomControls
        info={data?.characters.info}
        loading={loading}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

CharacterPage.propTypes = {};

export default CharacterPage;
