import React, { memo } from "react";

const Date = memo(({ date, currentMonth = true }) => {
  return (
    <div className="date" style={{ color: currentMonth ? "black" : "#ccc" }}>
      {date.date()}
    </div>
  );
});

export default Date;
