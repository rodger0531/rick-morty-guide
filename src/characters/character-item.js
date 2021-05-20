import React from "react";
import { Popover } from "antd";

export const CharacterItem = ({
  data: { image, name, species, status, gender },
}) => {
  const content = (
    <div className="text-base text-yellow-900">
      <p>
        <b>{name}</b>
      </p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
  return (
    <>
      <Popover content={content} color="#f0e14a" className="text-lg">
        <img src={image} alt="" className="rounded-xl inline-block" />
      </Popover>
      <p className="truncate">{name}</p>
    </>
  );
};
