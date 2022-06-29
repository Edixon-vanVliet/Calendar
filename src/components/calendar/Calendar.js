import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Days from "./Days";
import Dates from "./Dates";
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
