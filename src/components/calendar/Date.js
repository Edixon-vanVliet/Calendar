import React, { memo, useEffect, useState } from "react";
import ModalForm from "../ModalForm";

const DATE_FORMAT = "MM/DD/YYYY";

const Date = memo(({ date, currentMonth = true }) => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (currentMonth) {
      setShowModal(true);
    }
  };

  const handleSave = (newEvent) => {
    const newEvents = [...events, newEvent];
    localStorage.setItem(date.format(DATE_FORMAT), JSON.stringify(newEvents));

    setEvents(newEvents);
    setShowModal(false);
  };

  useEffect(() => {
    const events =
      JSON.parse(localStorage.getItem(date.format(DATE_FORMAT))) ?? [];

    setEvents(events);
  }, [date]);

  return (
    <>
      <div
        className="date"
        style={{ color: currentMonth ? "black" : "#ccc" }}
        onClick={handleClick}
      >
        <p>{date.date()}</p>
        <div className="events">
          {events.map((event, index) => (
            <p className="event" key={index}>
              {event.name}
            </p>
          ))}
        </div>
      </div>
      <ModalForm
        show={showModal}
        date={date.format(DATE_FORMAT)}
        onSave={handleSave}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
});

export default Date;
