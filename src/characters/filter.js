import React from "react";
import { SelectField } from "../components/select-field";
import { SPECIES_TYPE } from "../core/constants";
import { FilterFilled } from "@ant-design/icons";

export const Filter = ({ setFilterSpecies, setCurrentPage }) => {
  const onChange = (species = "") => {
    setFilterSpecies(species);
    setCurrentPage(0);
  };

  const placeholder = (
    <div className="flex items-center">
      <FilterFilled className="mr-3" />
      <span>Filter by species</span>
    </div>
  );

  return (
    <div className="my-5 text-base">
      <SelectField
        data={SPECIES_TYPE}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
