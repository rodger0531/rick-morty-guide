import React from "react";
import { Select } from "antd";
const { Option } = Select;

export const SelectField = ({
  data,
  placeholder,
  onChange,
  className = "",
}) => {
  const onFilterChange = (val) => {
    onChange(val);
  };
  return (
    <>
      <Select
        className={className}
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
