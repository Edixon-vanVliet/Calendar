import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../../redux/calendarSlice';
import { dateFormat } from '../../../utils';
import ModalForm from '../../modal-form';

import styles from './dates.module.scss';

const Date = memo(({ date, currentMonth = true }) => {
  const events = useSelector((store) => store.calendar.events[date.format(dateFormat)] ?? [], shallowEqual);

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
      <div className={styles.date} style={{ color: currentMonth ? 'black' : '#ccc' }} onClick={handleClick}>
        <p>{date.date()}</p>
        <div className={styles.events}>
          {events.map((event, index) => (
            <p className={styles.event} key={index}>
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
