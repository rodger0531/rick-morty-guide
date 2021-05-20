import React from "react";
import { SelectField } from "../components/select-field";
import { SPECIES_TYPE } from "../core/constants";
import { FilterFilled } from "@ant-design/icons";

export const Filter = ({ setFilterSpecies, setCurrentPage }) => {
  const onChange = (species = "") => {
    setFilterSpecies(species);
    setCurrentPage(0);
  };

  return (
    <div className="my-5 text-base flex justify-center items-center">
      <FilterFilled className="mr-3 text-xl" />
      <SelectField data={SPECIES_TYPE} onChange={onChange} />
    </div>
  );
};
