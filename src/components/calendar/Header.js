import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nextMonth, previousMonth } from "../../redux/calendarSlice";

import moment from "moment";

const Header = () => {
  const current = useSelector((state) => state.calendar.current);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button type="primary" onClick={() => dispatch(previousMonth())}>
        Previous
      </Button>
      <h2>{moment(`${current.year}-${current.month}`).format("MMMM YYYY")}</h2>
      <Button type="primary" onClick={() => dispatch(nextMonth())}>
        Next
      </Button>
    </div>
  );
};

export default Header;
