import React from "react";
import { SelectField } from "../components/select-field";
import { SPECIES_TYPE } from "../core/constants";
import { FilterFilled } from "@ant-design/icons";
import { Input } from "antd";

export const TopControls = ({ setFilterParams, setCurrentPage }) => {
  const onSearch = (input) => {
    setFilterParams((prev) => ({
      ...prev,
      [Object.keys(input)[0]]: Object.values(input)[0],
    }));
    setCurrentPage(0);
  };

  const placeholder = (
    <div className="flex items-center">
      <FilterFilled className="mr-3" />
      <span>Filter by species</span>
    </div>
  );

  return (
    <div className="my-5 text-base flex flex-col justify-center md:flex-row items-center">
      <Input.Search
        className="mr-5 max-w-xs m-5"
        placeholder="Search by name"
        onSearch={(val) => onSearch({ name: val })}
        enterButton
      />
      <SelectField
        data={SPECIES_TYPE}
        placeholder={placeholder}
        onChange={(val) => onSearch({ species: val })}
      />
    </div>
  );
};
