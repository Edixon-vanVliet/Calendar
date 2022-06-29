import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Days } from "./headers";
import Dates from "./dates";
import { initializeCalendar } from "../../redux/calendarSlice";

import "./calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCalendar());
  }, [dispatch]);

  return (
    <div className="calendar">
      <Header />

      <Days />
      <Dates />
    </div>
  );
};

export default Calendar;
