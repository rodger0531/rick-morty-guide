import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { BottomControls } from "./bottom-controls";
import { CharacterItem } from "./character-item";
import { TopControls } from "./top-controls";
import { Skeleton } from "antd";

const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int, $species: String) {
    characters(page: $page, filter: { species: $species }) {
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

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSpecies, setFilterSpecies] = useState("");

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage, species: filterSpecies },
  });

  return (
    <div className="h-full flex flex-col justify-between">
      <TopControls
        setFilterSpecies={setFilterSpecies}
        setCurrentPage={setCurrentPage}
      />
      <div className="">
        {error && <p>`Error! ${error.message}`</p>}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {loading &&
            Array(20)
              .fill(0)
              .map((_, idx) => (
                <div key={`${idx}`} className="w-28 xl:w-36 h-42">
                  <Skeleton.Avatar
                    size={144}
                    className="rounded-xl"
                    shape="square"
                    active
                  />
                </div>
              ))}
          {data?.characters.results.map((item) => (
            <div key={item.id} className="w-28 xl:w-36">
              <CharacterItem data={item} />
            </div>
          ))}
        </div>
      </div>
      <BottomControls
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
