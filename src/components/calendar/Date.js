import React, { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/calendarSlice";
import { dateFormat } from "../../utils";
import ModalForm from "../ModalForm";

const Date = memo(({ date, currentMonth = true }) => {
  const events = useSelector(
    (store) => store.calendar.events[date.format(dateFormat)] ?? [],
    shallowEqual
  );

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (currentMonth) {
      setShowModal(true);
    }
  };

  const handleSave = (newEvent) => {
    dispatch(addEvent(newEvent));

    setShowModal(false);
  };

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
        date={date.format(dateFormat)}
        onSave={handleSave}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
});

export default Date;
