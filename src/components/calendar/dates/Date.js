import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addEvent } from 'store/calendarSlice';
import { ModalForm } from 'components/modal-form';

import styles from './dates.module.scss';

const Date = memo(({ date, currentMonth }) => {
  const events = useSelector((store) => store.calendar.events[date] ?? [], shallowEqual);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (currentMonth) {
      setShowModal(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleSave = (newEvent) => {
    dispatch(addEvent(newEvent));

    setShowModal(false);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={styles.date}
        style={{ color: currentMonth ? 'black' : '#ccc' }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <p>{date.substring(date.length - 2)}</p>
        <div className={styles.events}>
          {events.map((event) => (
            <p className={styles.event} key={`${event.date}T${event.start}`}>
              {event.name}
            </p>
          ))}
        </div>
      </div>
      <ModalForm show={showModal} date={date} onSave={handleSave} onCancel={() => setShowModal(false)} />
    </>
  );
});

Date.propTypes = {
  date: PropTypes.string.isRequired,
  currentMonth: PropTypes.bool,
};

Date.defaultProps = {
  currentMonth: true,
};

export default Date;
