import React from "react";
import { Select } from "antd";
const { Option } = Select;

export const SelectField = ({ data, width = 120, onChange }) => {
  const onFilterChange = (val) => {
    onChange(val);
  };
  return (
    <>
      <Select
        defaultValue={data[0]}
        style={{ width }}
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
