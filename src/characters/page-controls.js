import React from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const PageControls = ({ loading, currentPage, setCurrentPage }) => {
  const fetchData = (next) => {
    setCurrentPage((prev) => prev + (next ? -1 : 1));
  };
  return (
    <>
      <Button
        disabled={currentPage === 1 || loading}
        type="primary"
        onClick={() => fetchData(true)}
        icon={<LeftOutlined />}
      ></Button>
      <Button
        disabled={loading}
        type="primary"
        onClick={() => fetchData(false)}
        icon={<RightOutlined />}
      ></Button>
    </>
  );
};
