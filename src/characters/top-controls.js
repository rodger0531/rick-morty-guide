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
    <div className="my-5 md:mt-10 text-base flex flex-col justify-center md:flex-row items-center">
      <Input.Search
        className="max-w-xs mx-5"
        placeholder="Who are you looking for?"
        onSearch={(val) => onSearch({ name: val })}
        enterButton
      />
      <SelectField
        className="mt-3 md:mt-0"
        data={SPECIES_TYPE}
        placeholder={placeholder}
        onChange={(val) => onSearch({ species: val })}
      />
    </div>
  );
};
