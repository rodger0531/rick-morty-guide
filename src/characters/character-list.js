import React from "react";
import { CharacterItem } from "./character-item";
import { Skeleton, Empty } from "antd";

export const CharacterList = ({ error, data, loading }) => {
  return (
    <div className="">
      {error && console.log("Error!", error.message, error.graphQLErrors)}
      {!data && error && !loading && <Empty />}
      <div className="grid mobile:grid-cols-2 grid-cols-5 grid-rows-4 gap-6 items-center justify-items-center">
        {loading &&
          Array(20)
            .fill(0)
            .map((_, idx) => (
              <div key={`${idx}`} className="h-32 xl:h-40">
                <Skeleton.Avatar
                  className="rounded-xl mobile:h-36 h-28 xl:h-36 mobile:w-36 w-28 xl:w-36"
                  shape="square"
                  active
                />
              </div>
            ))}
        {data?.characters.results.map((item) => (
          <div key={item.id} className="mobile:w-36 w-28 xl:w-36">
            <CharacterItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
