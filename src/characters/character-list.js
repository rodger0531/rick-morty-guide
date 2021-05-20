import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Controls } from "./controls";
import { CharacterItem } from "./character-item";

const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int!) {
    characters(page: $page) {
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
      }
    }
  }
`;

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });
  console.log(data);
  useEffect(() => {
    data && setList(data.characters.results);
  }, [data]);

  return (
    <div className="h-full">
      <div className="text-base">
        {error && <p>`Error! ${error.message}`</p>}
        <div className="grid grid-cols-5 gap-4">
          {list?.map((item) => (
            <div key={item.id} className="w-32">
              {console.log(item)}
              <CharacterItem data={item} />
            </div>
          ))}
        </div>
      </div>
      <Controls
        info={data?.characters.info}
        loading={loading}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

CharacterList.propTypes = {};

export default CharacterList;
