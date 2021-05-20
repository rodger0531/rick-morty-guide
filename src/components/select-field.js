import React from "react";
import { Select } from "antd";
const { Option } = Select;

export const SelectField = ({ data, placeholder, onChange }) => {
  const onFilterChange = (val) => {
    onChange(val);
  };
  return (
    <>
      <Select
        placeholder={placeholder}
        style={{ minWidth: "160px" }}
        onChange={onFilterChange}
      >
        <Option>All</Option>s
        {data.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </>
  );
};
