import React from "react";
import { SelectField } from "../components/select-field";
import { SPECIES_TYPE } from "../core/constants";

console.log(SPECIES_TYPE);
export const Filter = () => {
  return (
    <>
      <SelectField data={SPECIES_TYPE} />
    </>
  );
};
