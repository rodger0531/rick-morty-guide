import React from "react";
import { Popover } from "antd";
import { COLOR_PALETTE } from "../core/constants";

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
      <Popover
        content={content}
        color={COLOR_PALETTE.YELLOW}
        className="text-lg"
      >
        <img src={image} alt="" className="rounded-xl inline-block" />
      </Popover>
      <p className="truncate" style={{ color: COLOR_PALETTE.PINK }}>
        {name}
      </p>
    </>
  );
};
