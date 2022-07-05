import moment from 'moment';
import { shallowEqual, useSelector } from 'react-redux';
import { dateFormat } from '../../../utils';
import Date from './Date';

import styles from './dates.module.scss';

const Dates = () => {
  const { currentMonth, dateRange } = useSelector(
    (store) => ({
      dateRange: store.calendar.dateRange,
      currentMonth: store.calendar.current.month,
    }),
    shallowEqual
  );

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
          date={startingDate.format(dateFormat)}
          currentMonth={currentMonth === startingDate.month() + 1}
        />
      );

      startingDate.add(1, 'days');
    }

    return dates;
  };

  return <div className={styles.dates}>{getDates()}</div>;
};

export default Dates;
