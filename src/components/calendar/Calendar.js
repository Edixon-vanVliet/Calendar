import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Days from "./Days";
import Dates from "./Dates";
import moment from "moment";
import { initializeCalendar } from "../../redux/calendarSlice";

import "./calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();

  const [currentDate] = useState(moment());
  const [startingDate, setStartingDate] = useState();

  useEffect(() => {
    const date = moment().startOf("month");
    const day = date.day();

    setStartingDate(date.subtract(day, "days"));
    dispatch(initializeCalendar());
  }, [dispatch]);

  return (
    <div className="calendar">
      <Header />

      <Days />
      <Dates currentDate={currentDate} startingDate={startingDate} />
    </div>
  );
};

export default Calendar;
