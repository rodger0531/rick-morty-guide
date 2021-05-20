import React, { useState, useEffect } from "react";
import { Pagination } from "antd";

export const Controls = ({ info, loading, currentPage, setCurrentPage }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (info && info.count !== total) {
      setTotal(info.count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);
  const fetchData = (page, size) => {
    console.log("p", page);
    setCurrentPage(page);
  };
  return (
    <div className="fixed inline-block bottom-0 right-0 left-0 mb-5">
      <Pagination
        defaultCurrent={1}
        total={total}
        pageSize={20}
        disabled={loading}
        current={currentPage}
        onChange={fetchData}
      />
    </div>
  );
};
