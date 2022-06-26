import React, { memo, useState } from "react";
import ModalForm from "../ModalForm";

const DATE_FORMAT = "MM/DD/YYYY";

const Date = memo(({ date, currentMonth = true }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSave = (values) => {};

  return (
    <>
      <div
        className="date"
        style={{ color: currentMonth ? "black" : "#ccc" }}
        onClick={handleClick}
      >
        {date.date()}
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
