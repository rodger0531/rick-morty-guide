import React from "react";
import { SelectField } from "../components/select-field";
import { SPECIES_TYPE } from "../core/constants";
import { FilterFilled } from "@ant-design/icons";
import { Input } from "antd";

export const TopControls = ({ setFilterSpecies, setCurrentPage }) => {
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

  const onSearch = (val) => {
    console.log(val);
  };

  return (
    <div className="my-5 text-base flex flex-col justify-center md:flex-row items-center">
      <Input.Search
        className="mr-5 max-w-xs m-5"
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <SelectField
        data={SPECIES_TYPE}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
