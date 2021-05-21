import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { BottomControls } from "./bottom-controls";
import { TopControls } from "./top-controls";
import { CharacterList } from "./character-list";

const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int, $species: String, $name: String) {
    characters(page: $page, filter: { species: $species, name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        species
        gender
        status
        image
        location {
          name
          dimension
        }
      }
    }
  }
`;

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
