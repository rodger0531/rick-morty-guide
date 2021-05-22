import React from "react";
import { Popover } from "antd";
import { COLOR_PALETTE } from "../core/constants";

export const CharacterItem = ({
  data: { image, name, species, status, gender, location },
}) => {
  const content = (
    <div className="text-base text-rm-brown">
      <p>
        <b>{name}</b>
      </p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <p>Location: {location.name}</p>
      <p>Dimension: {location.dimension || "unknown"}</p>
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
        <img src={image} alt="Avatar" className="rounded-xl inline-block" />
      </Popover>
      <p className="truncate text-base" style={{ color: COLOR_PALETTE.PINK }}>
        {name}
      </p>
    </>
  );
};
