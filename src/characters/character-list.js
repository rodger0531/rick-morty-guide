import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { PageControls } from "./page-controls";

const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int!) {
    characters(page: $page) {
      results {
        name
        id
      }
    }
  }
`;

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  useEffect(() => {
    data && setCharacters(data.characters.results);
  }, [data]);

  return (
    <div>
      <PageControls
        loading={loading}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="text-base">
        {error && <p>`Error! ${error.message}`</p>}
        {characters?.map(({ id, name }) => (
          <div key={id}>
            <p>
              {id} : {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

CharacterList.propTypes = {};

export default CharacterList;
