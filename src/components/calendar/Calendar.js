import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeCalendar } from 'store/calendarSlice';
import { Dates } from './dates';
import { Header, Days } from './headers';

import styles from './calendar.module.scss';

const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCalendar());
  }, [dispatch]);

  return (
    <div className={styles.calendar}>
      <Header />

      <Days />
      <Dates />
    </div>
  );
};

export default Calendar;
