import React, { useState } from "react";
import moment from "moment";

import "./calendar.css";

const Calendar = () => {
  const [date] = useState(moment());

  return (
    <div className="calendar">
      <h2>{date.format("MMMM")}</h2>
    </div>
  );
};

export default Calendar;
