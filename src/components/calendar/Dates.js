import React from "react";
import { useSelector } from "react-redux";
import Date from "./Date";
import moment from "moment";

const Dates = () => {
  const { currentMonth, dateRange } = useSelector((store) => ({
    dateRange: store.calendar.dateRange,
    currentMonth: store.calendar.current.month,
  }));

  const getDates = () => {
    const dates = [];

    if (dateRange.length !== 2) {
      return dates;
    }

    const startingDate = moment(dateRange[0]);
    const endingDate = moment(dateRange[1]);

    while (!startingDate.isSame(endingDate)) {
      dates.push(
        <Date
          key={startingDate.dayOfYear()}
          date={startingDate.clone()}
          currentMonth={currentMonth === startingDate.month() + 1}
        />
      );

      startingDate.add(1, "days");
    }

    return dates;
  };

  return <div className="dates">{getDates()}</div>;
};

export default Dates;
