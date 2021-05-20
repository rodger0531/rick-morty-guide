import React from "react";
import { Select } from "antd";
const { Option } = Select;

export const SelectField = ({ data, width = 120, onChange }) => {
  return (
    <>
      <Select defaultValue={data[0]} style={{ width }} onChange={onChange}>
        {data.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </>
  );
};
