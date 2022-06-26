import React from "react";
import Date from "./Date";

const DAYS_IN_WEEK = 7;

const Dates = ({ currentDate, startingDate }) => {
  const getDates = () => {
    if (currentDate === undefined || startingDate === undefined) {
      return [];
    }

    let daysInCalendar = currentDate.endOf("month").diff(startingDate, "days");
    daysInCalendar += DAYS_IN_WEEK - (daysInCalendar % DAYS_IN_WEEK);

    const dates = [];
    const date = startingDate.clone();
    for (let i = 0; i < daysInCalendar; i++) {
      dates.push(
        <Date
          key={date.dayOfYear()}
          date={date.clone()}
          currentMonth={date.month() === currentDate.month()}
        />
      );

      date.add(1, "day");
    }

    return dates;
  };

  return <div className="dates">{getDates()}</div>;
};

export default Dates;
